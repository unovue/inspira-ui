<template>
  <CodeGroup>
    <div :label="label || componentName" icon="lucide:laptop-minimal">
      <component :is="componentName" />
    </div>
    <div
      label="Code"
      icon="lucide:square-terminal"
      class="flex overflow-x-auto"
      :code="rawString"
    >
      <span v-html="codeHtml"></span>
    </div>
  </CodeGroup>
</template>

<script lang="ts" setup>
import { codeToHtml } from "shiki";
import { MagicString } from "vue/compiler-sfc";

const props = defineProps({
  componentName: String,
  id: String,
  type: String,
  label: String,
});

const componentPath = `../inspira/${props.type}/${props.id ?? "."}/${
  props.componentName
}.vue?raw`;
const rawString = ref("");
const codeHtml = ref("");

onMounted(async () => {
  /* @vite-ignore */
  const code = await import(componentPath).then((res) => res.default.trim());

  rawString.value = updateImportPaths(code);

  codeHtml.value = await codeToHtml(rawString.value, {
    lang: "vue",
    theme: "dark-plus",
  }).then((res) =>
    res.replace(
      "background-color:#1E1E1E;",
      "background-color: transparent; padding: 1rem;"
    )
  );
});

function updateImportPaths(code: string) {
  const magicString = new MagicString(code);
  magicString.replaceAll("~/components/content/inspira/", "@/components/");

  return magicString.toString();
}
</script>
