<template>
  <div
    :icon="icon"
    :class="cn('relative flex max-h-[32rem]', $props.class)"
    :code="rawString"
  >
    <CodeCopy class="absolute top-0 right-0" :code="rawString" />
    <div class="overflow-auto">
      <span class="text-sm" v-html="codeHtml"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { codeToHtml } from "shiki";
import { MagicString } from "vue/compiler-sfc";
import { cn } from "~/lib/utils";
import "shiki/onig.wasm?init";

const rawString = ref("");
const codeHtml = ref("");

const props = defineProps({
  componentName: String,
  id: String,
  type: String,
  icon: {
    type: String,
    default: "lucide:square-terminal",
  },
  class: String,
});

// Create a map of all possible components using import.meta.glob
const rawComponents = import.meta.glob("../inspira/**/*.vue", {
  query: "?raw",
  import: "default",
});

// Compute the component path based on props
const componentPath = computed(
  () =>
    `../inspira/${props.type}/${props.id ? props.id + "/" : ""}${
      props.componentName
    }.vue`
);

// Load and process the component code on mount
onMounted(() => {
  loadAndProcessComponentCode();
});

watchEffect(async () => {
  codeHtml.value = await convertCodeToHtml(
    rawString.value,
    useColorMode().value
  );
});

// Function to load and process the component code
async function loadAndProcessComponentCode() {
  try {
    const componentCode = await fetchComponentCode();
    rawString.value = updateImportPaths(componentCode);
    codeHtml.value = await convertCodeToHtml(
      rawString.value,
      useColorMode().value
    );
  } catch (error) {
    console.error("Error loading component code:", error);
  }
}

// Fetch the raw code of the component dynamically
async function fetchComponentCode() {
  const path = componentPath.value;
  const loadRawComponent = rawComponents[path];
  if (!loadRawComponent) throw new Error(`Component not found: ${path}`);

  const mod = await loadRawComponent();
  return (mod as any).trim();
}

// Convert the raw code to HTML with syntax highlighting
async function convertCodeToHtml(code: string, colorMode: string) {
  const isDarkMode = colorMode == "dark";
  const theme = isDarkMode ? "github-dark" : "github-light";

  const html = await codeToHtml(code, {
    lang: "vue",
    theme: theme,
    colorReplacements: {
      "github-dark": {
        "#24292e": "transparent",
      },
      "github-light": {
        "#fff": "transparent",
      },
    },
  });

  return html.replace("shiki", "shiki py-2 leading-[0.4rem]");
}

// Update import paths in the raw code using MagicString
function updateImportPaths(code: string) {
  const magicString = new MagicString(code);
  magicString.replaceAll("~/components/content/inspira/", "@/components/");
  magicString.replaceAll("~/composables/", "@/composables/");
  return magicString.toString();
}
</script>
