// Uploads public/images and public/videos to the R2 bucket, keeping the same
// paths, so /images/x.jpg is served at https://<R2_PUBLIC_URL>/images/x.jpg.
import { requireEnv } from "./env";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";
import { R2_BUCKET, R2_ENDPOINT, R2_PUBLIC_URL } from "../src/lib/config";

const s3 = new S3Client({
  region: "auto",
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: requireEnv("R2_ACCESS_KEY_ID"),
    secretAccessKey: requireEnv("R2_SECRET_ACCESS_KEY"),
  },
});

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
};

async function* walk(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const publicDir = join(process.cwd(), "public");
let uploaded = 0;
for (const folder of ["images", "videos"]) {
  for await (const file of walk(join(publicDir, folder))) {
    const key = relative(publicDir, file).split(sep).join("/");
    await s3.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: await readFile(file),
        ContentType: CONTENT_TYPES[extname(file).toLowerCase()] ?? "application/octet-stream",
        CacheControl: "public, max-age=31536000, immutable",
      }),
    );
    uploaded++;
    console.log(`  ${R2_PUBLIC_URL}/${key}`);
  }
}
console.log(`Uploaded ${uploaded} files to R2 bucket "${R2_BUCKET}".`);
