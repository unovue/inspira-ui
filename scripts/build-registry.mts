import type { z } from "zod";
import type { Registry, registryItemTypeSchema } from "../registry/schema";
// @sts-nocheck
import { existsSync, promises as fs } from "node:fs";
import path from "node:path";
import { registry } from "../registry";
import { buildRegistry as crawlContent } from "./crawl-content";
import { registryEntrySchema, registrySchema } from "../registry/schema";

const REGISTRY_PATH = path.join(process.cwd(), "public/r");

const REGISTRY_INDEX_WHITELIST: z.infer<typeof registryItemTypeSchema>[] = [
  "registry:ui",
  "registry:block",
  // "registry:example",
  "registry:hook",
];

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  const targetPath = path.join(REGISTRY_PATH);

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  for (const item of registry) {
    if (!REGISTRY_INDEX_WHITELIST.includes(item.type)) continue;

    let files;
    if (item.files) {
      files = await Promise.all(
        item.files.map(async (_file) => {
          const file = {
            path: _file.path,
            type: _file.type,
            content: "",
            target: _file.target ?? "",
          };

          let content: string;
          try {
            if (file.type === "registry:hook") {
              content = await fs.readFile(path.join(process.cwd(), file.path), "utf8");
            } else {
              content = await fs.readFile(
                path.join(process.cwd(), "components", "content", "inspira", file.path),
                "utf8",
              );
            }
          } catch (error) {
            console.error(error);
            return;
          }

          const target = file.target || "";

          return {
            path: file.path,
            type: file.type,
            content,
            target,
          };
        }),
      );
    }

    const payload = registryEntrySchema
      .omit({
        category: true,
        subcategory: true,
      })
      .safeParse({
        ...item,
        files,
      });

    if (payload.success) {
      await writeFile(
        path.join(targetPath, `${item.name}.json`),
        JSON.stringify(payload.data, null, 2),
      );
    }
  }
}

try {
  // check if the public/r directories exist, if not, create them.
  if (!existsSync(REGISTRY_PATH)) {
    await fs.mkdir(REGISTRY_PATH, { recursive: true });
  }

  const content = await crawlContent();
  const result = registrySchema.safeParse([...registry, ...content]);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  await buildStyles(result.data);

  // eslint-disable-next-line no-console
  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function writeFile(path: string, payload: any) {
  return fs.writeFile(path, `${payload}\r\n`, "utf8");
}
