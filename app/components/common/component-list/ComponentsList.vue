<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";

const route = useRoute();
const { locale } = useDocusI18n();

const { data: components } = await useAsyncData("tools", () => {
  return queryCollection(`docs_${locale.value}` as any).all() as Promise<DocsEnCollectionItem[]>;
});

console.log(components.value?.filter((c) => c.path.startsWith(route.path)));
</script>

<template>
  <div class="" />
</template>
