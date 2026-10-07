try {
  process.loadEnvFile(".env.local");
} catch {
  // .env.local is optional
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing ${name}. Add it to .env.local.`);
    process.exit(1);
  }
  return value;
}
