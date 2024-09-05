<template>
  <div
    icon="lucide:square-terminal"
    class="flex overflow-x-auto text-xs"
    :code="rawString"
  >
    <span v-html="codeHtml"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { codeToHtml } from "shiki";
import { MagicString } from "vue/compiler-sfc";

const rawString = ref("");
const codeHtml = ref("");

const props = defineProps({
  componentName: String,
  id: String,
  type: String,
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

// Function to load and process the component code
async function loadAndProcessComponentCode() {
  try {
    const code = await fetchComponentCode();
    rawString.value = updateImportPaths(code);
    codeHtml.value = await convertCodeToHtml(rawString.value);
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
async function convertCodeToHtml(code: string) {
  const html = await codeToHtml(code, { lang: "vue", theme: "dark-plus" });
  return html.replace(
    "background-color:#1E1E1E;",
    "background-color: transparent; padding: 0.5rem;"
  );
}

// Update import paths in the raw code using MagicString
function updateImportPaths(code: string) {
  const magicString = new MagicString(code);
  magicString.replaceAll("~/components/content/inspira/", "@/components/");
  return magicString.toString();
}
</script>
