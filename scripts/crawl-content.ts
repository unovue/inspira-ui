import type { Registry, RegistryFiles } from "../registry/schema";
import { readdir, readFile } from "node:fs/promises";
import { parseSync } from "@oxc-parser/wasm";
import { join, resolve } from "pathe";
import { compileScript, parse } from "vue/compiler-sfc";

// TODO: Maybe specify the types of the dependencies between normal and dev dependencies, like @types/three
const DEPENDENCIES = new Map<string, string[]>([
  ["reka-ui", []],
  ["@vueuse/core", []],
  ["vue-sonner", []],
  ["vaul-vue", []],
  ["@tanstack/vue-table", []],
  ["@unovis/vue", ["@unovis/ts"]],
  ["embla-carousel-vue", []],
  ["vee-validate", ["@vee-validate/zod", "zod"]],
  ["three", ["@types/three"]],
  ["canvas-confetti", ["@types/canvas-confetti"]],
  ["three-globe", ["three", "postprocessing"]],
  ["cobe", []],
  ["vue-use-spring", []],
  ["theme-colors", []],
  ["simplex-noise", []],
  ["qss", []],
  ["motion-v", []],
  ["@number-flow/vue", []],
]);

// This map is used when a basic Inspira UI component internally uses another Inspira component.
const COMPONENT_DEPENDENCIES = new Map<string, string[]>([
  ["scroll-island", ["animated-circular-progressbar"]],
]);

const REGISTRY_URL = process.env.REGISTRY_URL ?? "https://inspira-ui.com/r";
const REGISTRY_DEPENDENCY = "@/";

type ArrayItem<T> = T extends Array<infer X> ? X : never;
type RegistryItem = ArrayItem<Registry>;

export async function buildRegistry() {
  const registryRootPath = resolve("components", "content", "inspira");
  const registry: Registry = [];

  const uiPath = resolve(registryRootPath, "ui");
  // const examplesPath = resolve(registryRootPath, "examples");
  const blocksPath = resolve(registryRootPath, "blocks");
  const composablesPath = resolve("composables");

  const [ui, block, hooks] = await Promise.all([
    crawlUI(uiPath),
    // crawlExample(examplesPath),
    crawlBlock(blocksPath),
    crawlHook(composablesPath),
  ]);

  registry.push(...ui, ...block, ...hooks);

  return registry;
}

async function crawlUI(rootPath: string) {
  const dir = await readdir(rootPath, { recursive: true, withFileTypes: true });

  const uiRegistry: Registry = [];

  for (const dirent of dir) {
    if (!dirent.isDirectory()) continue;

    const componentPath = resolve(rootPath, dirent.name);
    const ui = await buildUIRegistry(componentPath, dirent.name);
    uiRegistry.push(ui);
  }

  return uiRegistry;
}

async function crawlExample(rootPath: string) {
  const type = `registry:example` as const;
  const dir = await readdir(rootPath, { withFileTypes: true });
  const registry: Registry = [];

  async function processFile(filepath: string, filename: string, relativePath: string) {
    const source = await readFile(filepath, { encoding: "utf8" });
    const [name] = filename.split(".");

    const file = {
      name: filename,
      content: source,
      path: relativePath,
      target: "",
      type,
    };

    let dependencies = new Set<string>();
    let registryDependencies = new Set<string>();

    if (filename.endsWith(".vue")) {
      const deps = await getFileDependencies(filepath, source);
      dependencies = deps.dependencies;
      registryDependencies = deps.registryDependencies;
    }

    registry.push({
      name,
      type,
      files: [file],
      registryDependencies: Array.from(registryDependencies),
      dependencies: Array.from(dependencies),
    });
  }

  for (const dirent of dir) {
    if (!dirent.isFile()) {
      const subDirPath = join(rootPath, dirent.name);
      const subDir = await readdir(subDirPath, { withFileTypes: true });

      for (const subDirent of subDir) {
        if (!subDirent.isFile()) continue;

        const filepath = join(subDirPath, subDirent.name);
        const relativePath = join("examples", dirent.name, subDirent.name);
        await processFile(filepath, subDirent.name, relativePath);
      }
      continue;
    }

    const filepath = join(rootPath, dirent.name);
    const relativePath = join("examples", dirent.name);
    await processFile(filepath, dirent.name, relativePath);
  }

  return registry;
}

async function crawlBlock(rootPath: string) {
  const type = `registry:block` as const;

  const dir = await readdir(rootPath, { withFileTypes: true });

  const registry: Registry = [];

  for (const dirent of dir) {
    if (!dirent.isFile()) {
      const result = await buildBlockRegistry(`${rootPath}/${dirent.name}`, dirent.name);

      if (result.files.length) {
        registry.push(result);
      }
      continue;
    }
    if (!dirent.name.endsWith(".vue") || !dirent.isFile()) continue;

    const [name] = dirent.name.split(".vue");

    const filepath = join(rootPath, dirent.name);
    const source = await readFile(filepath, { encoding: "utf8" });
    const relativePath = join("blocks", dirent.name);

    const target = "pages/dashboard/index.vue";

    const file = {
      name: dirent.name,
      content: source,
      path: relativePath,
      target,
      type,
    };
    const { dependencies, registryDependencies } = await getFileDependencies(filepath, source);

    registry.push({
      name,
      type,
      files: [file],
      registryDependencies: Array.from(registryDependencies),
      dependencies: Array.from(dependencies),
    });
  }

  return registry;
}

async function crawlHook(rootPath: string) {
  const type = `registry:hook` as const;
  const registry: Registry = [];

  const dir = await readdir(rootPath, { withFileTypes: true });

  for (const dirent of dir) {
    if (!dirent.isFile() || !dirent.name.endsWith(".ts")) continue;

    const [name] = dirent.name.split(".ts");
    const filepath = join(rootPath, dirent.name);
    const source = await readFile(filepath, { encoding: "utf8" });
    const relativePath = join("composables", dirent.name);

    const file = {
      name: dirent.name,
      content: source,
      path: relativePath,
      type,
      target: "",
    };

    const { dependencies, registryDependencies } = await getFileDependencies(filepath, source);

    registry.push({
      name,
      type,
      files: [file],
      registryDependencies: Array.from(registryDependencies),
      dependencies: Array.from(dependencies),
    });
  }

  return registry;
}

async function buildUIRegistry(componentPath: string, componentName: string) {
  const dir = await readdir(componentPath, {
    withFileTypes: true,
  });

  const files: RegistryFiles[] = [];
  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();
  const type = "registry:ui";

  for (const dirent of dir) {
    if (!dirent.isFile()) continue;
    if (componentName === "github-globe" && dirent.name === "globe.json") continue;

    const filepath = join(componentPath, dirent.name);
    const relativePath = join("ui", componentName, dirent.name);
    const source = await readFile(filepath, { encoding: "utf8" });
    const target = "";

    files.push({ content: source, path: relativePath, type, target });

    // only grab deps from the vue files
    if (!dirent.name.endsWith(".vue")) continue;

    const deps = await getFileDependencies(filepath, source);
    if (!deps) continue;

    deps.dependencies.forEach((dep) => dependencies.add(dep));
    deps.registryDependencies.forEach((dep) => registryDependencies.add(dep));
  }

  // Add component dependencies if they exist in the map
  const componentDeps = COMPONENT_DEPENDENCIES.get(componentName);
  if (componentDeps) {
    componentDeps.forEach((dep) => {
      registryDependencies.add(`${REGISTRY_URL}/${dep}.json`);
    });
  }

  return {
    name: componentName,
    type,
    files,
    registryDependencies: Array.from(registryDependencies),
    dependencies: Array.from(dependencies),
  } satisfies RegistryItem;
}

async function buildBlockRegistry(blockPath: string, blockName: string) {
  const dir = await readdir(blockPath, { withFileTypes: true, recursive: true });

  const files: RegistryFiles[] = [];
  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();

  for (const dirent of dir) {
    if (!dirent.isFile()) continue;

    const filepath = join(blockPath, dirent.name);
    const relativePath = join("blocks", blockName, dirent.name);
    const source = await readFile(filepath, { encoding: "utf8" });

    files.push({ content: source, path: relativePath, type: "registry:component", target: "" });

    const deps = await getFileDependencies(filepath, source);
    if (!deps) continue;

    deps.dependencies.forEach((dep) => dependencies.add(dep));
    deps.registryDependencies.forEach((dep) => registryDependencies.add(dep));
  }

  return {
    type: "registry:block",
    files,
    name: blockName,
    registryDependencies: Array.from(registryDependencies),
    dependencies: Array.from(dependencies),
  } satisfies RegistryItem;
}

async function getFileDependencies(filename: string, sourceCode: string) {
  const registryDependencies = new Set<string>();
  const dependencies = new Set<string>();

  function populateDeps(source: string) {
    const peerDeps = DEPENDENCIES.get(source);
    // const taggedDeps = DEPENDENCIES_WITH_TAGS.get(source)
    if (peerDeps !== undefined) {
      // if (taggedDeps !== undefined)
      //   dependencies.add(taggedDeps)
      // else
      dependencies.add(source);
      peerDeps.forEach((dep) => dependencies.add(dep));
    }

    if (source.startsWith(REGISTRY_DEPENDENCY) && !source.endsWith(".vue")) {
      const component = source.split("/").at(-1)!;
      const jsonPath = component === "utils" ? component : `${REGISTRY_URL}/${component}.json`;
      registryDependencies.add(jsonPath);
    }
  }

  if (filename.endsWith(".ts")) {
    const ast = parseSync(sourceCode, {
      sourceType: "module",
      sourceFilename: filename,
    });

    const sources = ast.program.body
      .filter((i: any) => i.type === "ImportDeclaration")
      .map((i: any) => i.source);
    sources.forEach((source: any) => {
      populateDeps(source.value);
    });
  } else {
    const parsed = parse(sourceCode, { filename });
    if (parsed.descriptor.script?.content || parsed.descriptor.scriptSetup?.content) {
      const compiled = compileScript(parsed.descriptor, { id: "" });

      Object.values(compiled.imports!).forEach((value) => {
        populateDeps(value.source);
      });
    }
  }

  return { registryDependencies, dependencies };
}
