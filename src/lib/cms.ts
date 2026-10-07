import { COMPREHENSIVE_FAQS, STUDIO_FAQS } from "../data/comprehensiveFaq";
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

const QUERY = `{${Object.keys(COLLECTIONS)
  .map((type) => `"${type}": *[_type == "${type}"] | order(order asc)`)
  .join(",")}}`;

const TIMEOUT_MS = 3000;

function stripSystemFields(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripSystemFields);
  if (value && typeof value === "object") {
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

export async function hydrateContent(): Promise<void> {
  if (!SANITY_ENABLED) return;

  try {
    const result = await Promise.race([
      sanityClient.fetch<Record<string, unknown[]>>(QUERY),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), TIMEOUT_MS)),
    ]);
    if (!result) return;

    for (const [type, target] of Object.entries(COLLECTIONS)) {
      const docs = result[type];
      if (Array.isArray(docs) && docs.length > 0) {
        replaceContents(target, docs.map(stripSystemFields));
      }
    }

    replaceContents(
      STUDIO_FAQS,
      COMPREHENSIVE_FAQS.filter((f) => f.category === "studio" || f.category === "model"),
    );
  } catch (error) {
    console.warn("[cms] Sanity fetch failed, using bundled content.", error);
  }
}
