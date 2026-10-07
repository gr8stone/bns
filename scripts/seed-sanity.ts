// Pushes all bundled site content into Sanity (idempotent: createOrReplace).
// Usage: pnpm sanity:seed            -> media paths stay as /images/... (served from Vercel)
//        pnpm sanity:seed --media=r2 -> media paths point at the R2 custom domain
import { requireEnv } from "./env";
import { createClient } from "@sanity/client";
import { COMPREHENSIVE_FAQS } from "../src/data/comprehensiveFaq";
import { FAQ_ITEMS } from "../src/data/faq";
import { JOURNAL_ARTICLES } from "../src/data/journal";
import { PROCESS_STEPS } from "../src/data/process";
import { PROJECTS } from "../src/data/projects";
import { SERVICES } from "../src/data/services";
import { AUDIENCE_ALIGNMENTS, STUDIO_MODELS, STUDIO_RATE_CARD } from "../src/data/studio";
import { TESTIMONIALS } from "../src/data/testimonials";
import {
  R2_PUBLIC_URL,
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_ENABLED,
  SANITY_PROJECT_ID,
} from "../src/lib/config";

if (!SANITY_ENABLED) {
  console.error("Set the Sanity project ID in src/lib/config.ts (or VITE_SANITY_PROJECT_ID in .env.local).");
  process.exit(1);
}

const useR2 = process.argv.includes("--media=r2");

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  token: requireEnv("SANITY_WRITE_TOKEN"),
  useCdn: false,
});

const COLLECTIONS: Record<string, object[]> = {
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

const MEDIA_PREFIX = /^\/(images|videos)\//;

function toMediaUrl(value: string): string {
  if (!useR2 || !MEDIA_PREFIX.test(value)) return value;
  return `${R2_PUBLIC_URL}${value.split("/").map(encodeURIComponent).join("/")}`;
}

let keyCounter = 0;
function prepare(value: unknown): unknown {
  if (typeof value === "string") return toMediaUrl(value);
  if (Array.isArray(value)) {
    return value.map((item) => {
      const prepared = prepare(item);
      return prepared && typeof prepared === "object" && !Array.isArray(prepared)
        ? { _key: `k${(keyCounter++).toString(36)}`, ...prepared }
        : prepared;
    });
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, prepare(v)]));
  }
  return value;
}

function docId(type: string, item: Record<string, unknown>, index: number): string {
  const key = String(item.slug ?? item.id ?? item.code ?? item.number ?? index);
  return `${type}.${key.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

const docs = Object.entries(COLLECTIONS).flatMap(([type, items]) =>
  items.map((item, index) => ({
    _id: docId(type, item as Record<string, unknown>, index),
    _type: type,
    order: index,
    ...(prepare(item) as object),
  })),
);

const BATCH = 50;
for (let i = 0; i < docs.length; i += BATCH) {
  const tx = client.transaction();
  for (const doc of docs.slice(i, i + BATCH)) tx.createOrReplace(doc);
  await tx.commit();
}

const counts = Object.entries(COLLECTIONS).map(([type, items]) => `${type}: ${items.length}`);
console.log(`Seeded ${docs.length} documents into ${SANITY_PROJECT_ID}/${SANITY_DATASET} (media: ${useR2 ? "R2" : "local"})`);
console.log(counts.join("\n"));
