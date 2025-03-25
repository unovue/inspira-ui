// https://github.com/nuxtlabs/nuxt-llms

import { resolve, relative, join } from "pathe";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import yaml from "yaml";
import type { NitroApp } from "nitropack";

/**
 * Interface representing the directory configuration.
 */
interface DirConfig {
  slug: string;
  title: string;
}

/**
 * Converts a string into a URL-friendly slug.
 * @param str - The input string.
 * @returns The slugified string.
 */
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Reads and parses the __dir.yml configuration file if it exists.
 * @param dir - The directory to search for the __dir.yml file.
 * @returns An object with slug and title, or null if no configuration is found.
 */
function parseDirYml(dir: string): DirConfig | null {
  const dirConfigPath = join(dir, "__dir.yml");
  if (existsSync(dirConfigPath)) {
    const ymlContent = readFileSync(dirConfigPath, "utf-8");
    const yml = yaml.parse(ymlContent);
    return yml?.title ? { slug: slugify(yml.title), title: yml.title } : null;
  }
  return null;
}

/**
 * Recursively searches for a file by name starting from the given directory.
 * @param dir - The directory to start searching.
 * @param filename - The name of the file to find.
 * @returns The full path of the file if found, or null.
 */
function findFileRecursively(dir: string, filename: string): string | null {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isFile() && entry.name === filename) {
      return fullPath;
    }
    if (entry.isDirectory()) {
      const found = findFileRecursively(fullPath, filename);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Reads the source code of a component from the given file path.
 * @param componentPath - The path to the component file.
 * @returns The component source code as a string.
 */
function getComponentSource(componentPath: string): string {
  if (existsSync(componentPath)) {
    return readFileSync(componentPath, "utf-8");
  }
  return "// Component source not found.";
}

/**
 * Replaces custom markdown blocks with the corresponding component content.
 * @param mdContent - The markdown content.
 * @returns The processed markdown content.
 */
function replaceBlocks(mdContent: string): string {
  return mdContent.replace(/::(\w+)([^:]+)::/g, (match, type, rawProps) => {
    // Remove any surrounding curly braces from the raw properties.
    const cleanedProps = rawProps.trim().replace(/^[{]+|[}]+$/g, "");
    const props: Record<string, string> = {};
    cleanedProps.split(/\s+/).forEach((prop: string) => {
      const [key, val] = prop.split("=");
      if (key && val) {
        props[key] = val.replace(/"/g, "");
      }
    });

    // Process CodeViewer block: insert code from a file.
    if (type === "CodeViewer" && props.filename) {
      const searchBaseDir = resolve(process.cwd(), "components/content");
      const foundPath = findFileRecursively(searchBaseDir, props.filename);
      if (!foundPath) {
        return `\`\`\`${props.language}\n// Component source not found for ${props.filename}\n\`\`\``;
      } else {
        const componentSource = getComponentSource(foundPath);
        return `\`\`\`${props.language}\n${componentSource}\n\`\`\``;
      }
    }

    // Process ComponentLoader block: insert Vue component source.
    if (type === "ComponentLoader" && props.componentName) {
      const searchBaseDir = resolve(process.cwd(), "components/content");
      const fileToFind = `${props.componentName}.vue`;
      const foundPath = findFileRecursively(searchBaseDir, fileToFind);
      if (!foundPath) {
        return `\`\`\`vue\n// Component source not found for ${fileToFind}\n\`\`\``;
      } else {
        const componentSource = getComponentSource(foundPath);
        return `\`\`\`vue\n${componentSource}\n\`\`\``;
      }
    }

    // Process InstallationCli block: insert an InstallationCli component.
    if (type === "InstallationCli") {
      // TODO @Killian-Aidalinfo : Add additional handling in a future pull request.
      return `\`\`\`vue\n<InstallationCli component-id="${props.componentId}" />\n\`\`\``;
    }

    // Return the original block if no matching type is found.
    return match;
  });
}

/**
 * Recursively traverses directories to build routes and process Markdown files.
 * Cleans numeric prefixes from each path segment.
 * @param dir - The current directory.
 * @param contentRoot - The root directory for content.
 * @param accumulated - Accumulated directory configuration for breadcrumb.
 * @returns A string containing the generated markdown documentation.
 */
function buildContent(dir: string, contentRoot: string, accumulated: DirConfig[] = []): string {
  let output = "";
  const entries = readdirSync(dir);
  const currentDir = parseDirYml(dir);
  const nextAccumulated = currentDir ? [...accumulated, currentDir] : accumulated;

  for (const entry of entries) {
    const fullPath = resolve(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      output += buildContent(fullPath, contentRoot, nextAccumulated);
    } else if (entry.endsWith(".md")) {
      // Construct the URL path by cleaning numeric prefixes from each segment.
      const fileRelativePath = relative(contentRoot, fullPath);
      const urlParts = fileRelativePath.split("/").map((part, index, arr) => {
        // Remove numeric prefix from each segment (e.g., "1.getting-started" becomes "getting-started").
        let clean = part.replace(/^\d+\./, "");
        // For the last segment, also remove the ".md" extension.
        if (index === arr.length - 1) {
          clean = clean.replace(/\.md$/, "");
        }
        return clean;
      });
      const urlPath = urlParts.join("/");
      const url = `https://inspira-ui.com/${urlPath}`;

      // Read and process the Markdown content.
      const rawContent = readFileSync(fullPath, "utf-8");
      const breadcrumb = nextAccumulated.map((a) => a.title).join(" > ");
      const processedContent = replaceBlocks(rawContent.trim());
      const header = breadcrumb.trim() ? `# ${breadcrumb}\n\n` : "";
      output += `URL: ${url}\n\n${header}${processedContent}\n\n`;
    }
  }
  return output;
}

export default defineNitroPlugin((nitroApp: NitroApp) => {
  nitroApp.hooks.hook("llms:generate:full", async (_event, _options, contents) => {
    const contentRoot = resolve(process.cwd(), "content");
    let markdownOutput = "# Complete documentation of Inspira UI\n\n";
    markdownOutput += buildContent(contentRoot, contentRoot);
    contents.push(markdownOutput.trim());
  });
});
