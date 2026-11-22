import { COMPREHENSIVE_FAQS, STUDIO_FAQS } from "../data/comprehensiveFaq";
import { PAGE_CONTENT, contentDocId } from "../data/content";
import { FAQ_ITEMS } from "../data/faq";
import { JOURNAL_ARTICLES } from "../data/journal";
import { PROCESS_STEPS } from "../data/process";
import { PROJECTS } from "../data/projects";
import { SERVICES } from "../data/services";
import { AUDIENCE_ALIGNMENTS, STUDIO_MODELS, STUDIO_RATE_CARD } from "../data/studio";
import { TESTIMONIALS } from "../data/testimonials";
import { SANITY_ENABLED } from "./config";
import { sanityClient } from "./sanity";

// Sanity document type -> in-memory collection it hydrates.
const COLLECTIONS: Record<string, unknown[]> = {
  project: PROJECTS,
  service: SERVICES,
  processStep: PROCESS_STEPS,
  testimonial: TESTIMONIALS,
  faqItem: FAQ_ITEMS,
  detailedFaq: COMPREHENSIVE_FAQS,
  journalArticle: JOURNAL_ARTICLES,
  studioRate: STUDIO_RATE_CARD,
  studioModel: STUDIO_MODELS,
  audienceAlignment: AUDIENCE_ALIGNMENTS,
};

const LOCAL_PROJECT_FALLBACKS = PROJECTS.filter(
  (project) => project.slug === "beyond-the-pitch",
);

const QUERY = `{${Object.keys(COLLECTIONS)
  .map((type) => `"${type}": *[_type == "${type}"] | order(order asc)`)
  .concat(`"pageContent": *[_id in $contentIds]`)
  .join(",")}}`;

const TIMEOUT_MS = 3000;

/**
 * When the bundled copy in src/data was last revised. Sanity documents last
 * saved BEFORE this moment are older than the code and are ignored, so a stale
 * CMS can't overwrite newer copy. Anything edited in Sanity Studio after this
 * still wins.
 *
 * Bump this (to now, ISO UTC) whenever you change content in src/data, then
 * run `pnpm sanity:seed` so the CMS matches again.
 */
export const CONTENT_BUNDLED_AT = "2026-11-22T21:00:00Z";

const isFresh = (doc: PlainObject) =>
  typeof doc._updatedAt === "string" && doc._updatedAt >= CONTENT_BUNDLED_AT;

type PlainObject = Record<string, unknown>;

const isPlainObject = (value: unknown): value is PlainObject =>
  !!value && typeof value === "object" && !Array.isArray(value);

function stripSystemFields(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripSystemFields);
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !key.startsWith("_") && key !== "order")
        .map(([key, v]) => [key, stripSystemFields(v)]),
    );
  }
  return value;
}

function replaceContents<T>(target: T[], next: T[]) {
  target.splice(0, target.length, ...next);
}

// Arrays and objects are updated in place because modules alias nested values
// (e.g. NAV_LINKS = SITE_CONTENT.navLinks). Fields missing remotely keep local values.
function mergeInPlace(target: PlainObject, remote: PlainObject) {
  for (const [key, local] of Object.entries(target)) {
    const next = remote[key];
    if (next === undefined || next === null) continue;
    if (Array.isArray(local) && Array.isArray(next)) replaceContents(local, next);
    else if (isPlainObject(local) && isPlainObject(next)) mergeInPlace(local, next);
    else if (typeof local === typeof next) target[key] = next;
  }
}

export async function hydrateContent(): Promise<void> {
  if (!SANITY_ENABLED) return;

  try {
    const result = await Promise.race([
      sanityClient.fetch<Record<string, PlainObject[]>>(QUERY, {
        contentIds: PAGE_CONTENT.map((entry) => contentDocId(entry.key)),
      }),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), TIMEOUT_MS)),
    ]);
    if (!result) return;

    for (const [type, target] of Object.entries(COLLECTIONS)) {
      const docs = result[type];
      // A collection is replaced as a whole, so only when someone has edited it since the bundle.
      if (Array.isArray(docs) && docs.length > 0 && docs.some(isFresh)) {
        const sanitizedDocs = docs.map(stripSystemFields);
        if (type === "project") {
          const remoteSlugs = new Set(
            sanitizedDocs
              .filter(isPlainObject)
              .map((project) => project.slug)
              .filter((slug): slug is string => typeof slug === "string"),
          );
          const localFallbacks = LOCAL_PROJECT_FALLBACKS.filter(
            (project) => !remoteSlugs.has(project.slug),
          );
          replaceContents(target, [...localFallbacks, ...sanitizedDocs]);
        } else {
          replaceContents(target, sanitizedDocs);
        }
      }
    }

    replaceContents(
      STUDIO_FAQS,
      COMPREHENSIVE_FAQS.filter((f) => f.category === "studio" || f.category === "model"),
    );

    for (const doc of result.pageContent ?? []) {
      if (!isFresh(doc)) continue;
      const entry = PAGE_CONTENT.find((e) => contentDocId(e.key) === doc._id);
      if (entry) mergeInPlace(entry.content, stripSystemFields(doc) as PlainObject);
    }
  } catch (error) {
    console.warn("[cms] Sanity fetch failed, using bundled content.", error);
  }
}
