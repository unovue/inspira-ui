<template>
  <ClientOnly>
    <CodeGroup>
      <div :label="label || componentName" icon="lucide:laptop-minimal">
        <component v-if="componentPath" :is="componentName" />
        <Spinner v-else />
      </div>
      <div
        label="Code"
        icon="lucide:square-terminal"
        class="flex overflow-x-auto text-xs"
        :code="rawString"
      >
        <span v-html="codeHtml"></span>
      </div>
    </CodeGroup>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { codeToHtml } from "shiki";
import { MagicString } from "vue/compiler-sfc";

// Define props for the component
const props = defineProps({
  componentName: String,
  id: String,
  type: String,
  label: String,
});

// Reactive references for component state
const rawString = ref("");
const codeHtml = ref("");

// Compute the component path based on props
const componentPath = computed(
  () =>
    `../inspira/${props.type}/${props.id ?? "."}/${props.componentName}.vue?raw`
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
  const module = await import(componentPath.value);
  return module.default.trim();
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
