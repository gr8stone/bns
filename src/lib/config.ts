// Public, non-secret values are hardcoded so deployments work without any
// environment variables. VITE_* env vars (e.g. in .env.local) override them.
// import.meta.env is undefined when imported from Node scripts.
type Env = Record<string, string | undefined>;
const env: Env =
  import.meta.env ?? (globalThis as { process?: { env: Env } }).process?.env ?? {};

export const SANITY_PROJECT_ID: string = env.VITE_SANITY_PROJECT_ID || "REPLACE_WITH_SANITY_PROJECT_ID";
export const SANITY_DATASET: string = env.VITE_SANITY_DATASET || "production";
export const SANITY_API_VERSION: string = env.VITE_SANITY_API_VERSION || "2025-01-01";

export const R2_BUCKET: string = env.VITE_R2_BUCKET || "bns";
export const R2_ENDPOINT: string =
  env.VITE_R2_ENDPOINT || "https://7ff1ad5f31619e9e1a31b969ed85d05b.r2.cloudflarestorage.com";
export const R2_PUBLIC_URL: string = env.VITE_R2_PUBLIC_URL || "https://bns.stratapointadvisory.org";

export const SANITY_ENABLED = /^[a-z0-9]+$/.test(SANITY_PROJECT_ID);
