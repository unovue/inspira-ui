<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { mapContentNavigation } from "@nuxt/ui/utils/content";

const route = useRoute();

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const items = computed(() =>
  mapContentNavigation(
    navigation?.value.map((item) => ({ ...item, children: undefined })) ?? []
  )?.map((item) => ({
    ...item,
    active: route.path.startsWith(item.to as string),
  }))
);
</script>

<template>
  <UHeader title="" class="lg:flex items-center justify-between hidden">
    <UNavigationMenu :items="items" variant="pill" highlight />
  </UHeader>
</template>
