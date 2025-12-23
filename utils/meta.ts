import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export function inferSiteURL() {
  // https://github.com/unjs/std-env/issues/59
  return (
    process.env.NUXT_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL && `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) || // Vercel
    process.env.URL || // Netlify
    process.env.CI_PAGES_URL || // Gitlab Pages
    process.env.CF_PAGES_URL // Cloudflare Pages
  );
}

export async function getPackageJsonMetadata(dir: string) {
  try {
    const packageJson = await readFile(resolve(dir, "package.json"), "utf-8");
    const parsed = JSON.parse(packageJson);
    return {
      name: parsed.name,
      description: parsed.description,
    };
  } catch {
    return {
      name: "docs",
    };
  }
}
