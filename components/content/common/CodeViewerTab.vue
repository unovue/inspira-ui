<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    :icon="icon"
    :class="cn('relative flex max-h-[32rem]', $props.class)"
    :code="rawString"
  >
    <CodeCopy
      class="absolute -top-10 right-0"
      :code="rawString"
    />
    <code class="min-w-full overflow-auto px-2 leading-4">
      <pre
        class="text-sm"
        v-html="codeHtml"
      ></pre>
    </code>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { MagicString } from "vue/compiler-sfc";
import { cn } from "@/lib/utils";
import hljs from "highlight.js";
import "~/assets/css/code-theme.css";

interface Props {
  componentName?: string;
  id?: string;
  type?: string;
  icon?: string;
  class?: string;
  extension?: string;
}

const rawString = ref("");
const codeHtml = ref("");

const props = withDefaults(defineProps<Props>(), {
  icon: "lucide:square-terminal",
  extension: "vue",
});

// Create a map of all possible components using import.meta.glob
const rawComponents = import.meta.glob("../inspira/**/*.{vue,ts,js,d.ts}", {
  query: "?raw",
  import: "default",
});

// Compute the component path based on props
const componentPath = computed(
  () =>
    `../inspira/${props.type}/${props.id ? props.id + "/" : ""}${
      props.componentName
    }.${props.extension}`,
);

// Load and process the component code on mount
onMounted(() => {
  loadAndProcessComponentCode();
});

// Function to load and process the component code
async function loadAndProcessComponentCode() {
  try {
    const componentCode = await fetchComponentCode();
    rawString.value = updateImportPaths(componentCode);
    codeHtml.value = hljs.highlightAuto(rawString.value, ["ts", "html", "css", "js", "d.ts"]).value;
  } catch (error) {
    throw new Error("Error loading component code:", error);
  }
}

// Fetch the raw code of the component dynamically
async function fetchComponentCode() {
  const path = componentPath.value;
  const loadRawComponent = rawComponents[path];
  if (!loadRawComponent) throw new Error(`Component not found: ${path}`);

  const mod = await loadRawComponent();
  return (mod as unknown).trim();
}

// Update import paths in the raw code using MagicString
function updateImportPaths(code: string) {
  const magicString = new MagicString(code);
  magicString.replaceAll("~/components/content/inspira/", "@/components/");
  magicString.replaceAll("~/composables/", "@/composables/");
  return magicString.toString();
}
</script>
