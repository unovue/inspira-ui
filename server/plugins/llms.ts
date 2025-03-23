import { resolve, relative, join, basename } from "pathe";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import yaml from "yaml";
import type { NitroApp } from "nitropack";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  nitroApp.hooks.hook("llms:generate:full", async (_event, _options, contents) => {
    const contentRoot = resolve(process.cwd(), "content");
    const uiComponentsDir = resolve(process.cwd(), "components/content/inspira/ui");

    function slugify(str: string) {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    function parseDirYml(dir: string) {
      const dirConfigPath = join(dir, "__dir.yml");
      if (existsSync(dirConfigPath)) {
        const ymlContent = readFileSync(dirConfigPath, "utf-8");
        const yml = yaml.parse(ymlContent);
        return yml?.title ? { slug: slugify(yml.title), title: yml.title } : null;
      }
      return null;
    }

    function extractFrontmatter(raw: string) {
      const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
      if (!match) return { data: {}, content: raw };
      const data = yaml.parse(match[1]) || {};
      const content = raw.slice(match[0].length);
      return { data, content };
    }

    let markdownOutput = "# Documentation Complète des Routes\n\n";

    function buildRoutes(dir: string, accumulated: { slug: string; title: string }[] = []) {
      const entries = readdirSync(dir);
      const currentDir = parseDirYml(dir);
      const nextAccumulated = currentDir ? [...accumulated, currentDir] : accumulated;

      for (const entry of entries) {
        const fullPath = resolve(dir, entry);
        const stats = statSync(fullPath);

        if (stats.isDirectory()) {
          buildRoutes(fullPath, nextAccumulated);
        } else if (entry.endsWith(".md")) {
          const rawContent = readFileSync(fullPath, "utf-8");
          const { data, content: mdContent } = extractFrontmatter(rawContent);

          const fileSlug = slugify(basename(entry, ".md"));
          const routePath = "/" + nextAccumulated.map((a) => a.slug).join("/") + "/" + fileSlug;
          const breadcrumb = nextAccumulated.map((a) => a.title).join(" > ");

          markdownOutput += `# ${breadcrumb} > ${data.title || ""}\n\n`;
          if (data.description) markdownOutput += `_${data.description}_\n\n`;
          markdownOutput += `${mdContent.trim()}\n\n`;
        }
      }
    }

    buildRoutes(contentRoot);

    // 🔎 Collecte des composants (facultatif à injecter ou lister dans le markdown)
    function collectComponents(dir: string, list: string[]) {
      const entries = readdirSync(dir);
      for (const entry of entries) {
        const fullPath = resolve(dir, entry);
        const stats = statSync(fullPath);
        if (stats.isDirectory()) {
          collectComponents(fullPath, list);
        } else if (entry.endsWith(".vue")) {
          const relativePath =
            "/" +
            relative(uiComponentsDir, fullPath)
              .replace(/\\/g, "/")
              .replace(/\.vue$/, "");
          list.push(relativePath);
        }
      }
    }

    const componentsList: string[] = [];
    collectComponents(uiComponentsDir, componentsList);

    contents.push(markdownOutput.trim());
  });
});
