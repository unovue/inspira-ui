import type { DefinedCollection } from "@nuxt/content";
import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { useNuxt } from "@nuxt/kit";
import { joinURL } from "ufo";

const { options } = useNuxt();
const cwd = joinURL(options.rootDir, "content");
const locales = options.i18n?.locales;

const createDocsSchema = () =>
  z.object({
    category: z.string(),
    tags: z.array(z.string()),
    badge: z.enum(["New", "Updated"]).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional(),
        }),
      )
      .optional(),
  });

let collections: Record<string, DefinedCollection>;

if (locales && Array.isArray(locales)) {
  collections = {};
  for (const locale of locales) {
    const code = typeof locale === "string" ? locale : locale.code;

    collections[`landing_${code}`] = defineCollection({
      type: "page",
      source: {
        cwd,
        include: `${code}/index.md`,
      },
    });

    collections[`docs_${code}`] = defineCollection({
      type: "page",
      source: {
        cwd,
        include: `${code}/**/*.md`,
        prefix: `/${code}`,
        exclude: [`${code}/index.md`],
      },
      schema: createDocsSchema(),
    });
  }
} else {
  collections = {
    landing: defineCollection({
      type: "page",
      source: {
        cwd,
        include: "index.md",
      },
    }),
    docs: defineCollection({
      type: "page",
      source: {
        cwd,
        include: "**/*.md",
        exclude: ["index.md"],
      },
      schema: createDocsSchema(),
    }),
  };
}

export default defineContentConfig({ collections });
