<template>
  <ProsePre
    :class="cn('overflow-auto max-h-[32rem]', $props.class)"
    :code="rawString"
    v-bind="props"
  >
    <span class="text-sm" v-html="codeHtml"></span>
  </ProsePre>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { codeToHtml, loadWasm, type BuiltinLanguage } from "shiki";
import { MagicString } from "vue/compiler-sfc";
import { cn } from "~/lib/utils";

onBeforeMount(async () => {
  // @ts-ignore
  await loadWasm(import("shiki/onig.wasm"))
})

const rawString = ref("");
const codeHtml = ref("");

const props = defineProps({
  componentName: String,
  id: String,
  type: String,
  class: String,
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  inGroup: {
    type: Boolean,
    default: false,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
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

  // return html;
}

// Update import paths in the raw code using MagicString
function updateImportPaths(code: string) {
  const magicString = new MagicString(code);
  magicString.replaceAll("~/components/content/inspira/", "@/components/");
  magicString.replaceAll("~/composables/", "@/composables/");
  return magicString.toString();
}
</script>
