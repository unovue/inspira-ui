<script lang="ts" setup>
import type { DocsEnCollectionItem } from "@nuxt/content";

const props = defineProps<{ class?: string }>();

const { locale, isEnabled } = useDocusI18n();

const collectionName = computed(() => (isEnabled.value ? `docs_${locale.value}` : "docs"));

const { data: components } = await useAsyncData("new_component_collection", () => {
  return queryCollection(collectionName.value as any).all() as Promise<DocsEnCollectionItem[]>;
});

const path = `/${locale.value}/components`;

components.value = components.value
  ?.filter((c) => c.path.startsWith(path) && c.path !== path)
  .filter((component) => component.badge?.toLowerCase() === "new");
</script>

<template>
  <UMarquee
    v-if="components && components?.length"
    class="bg-accent/25 absolute top-0 right-0 left-0 mt-16 h-12 backdrop-blur-lg"
    :class="props.class"
    :overlay="false"
  >
    <div class="mx-8 flex items-center gap-3">
      <span class="px-2 text-lg font-bold"> ✦ </span>
      <span class="font-semibold">New Component Released:</span>
      <span
        v-for="(component, index) in components"
        :key="component.title"
        class="flex items-center gap-3"
      >
        <NuxtLink
          :to="component.path"
          class="hover:underline hover:underline-offset-4"
        >
          {{ component.title }}
        </NuxtLink>
        <span
          v-if="index !== components.length - 1"
          class="text-xl font-bold"
        >
          •
        </span>
      </span>
      <span class="px-2 text-lg font-bold"> ✦ </span>
    </div>
  </UMarquee>
</template>
