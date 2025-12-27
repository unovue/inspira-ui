<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const { nav } = useNavigation(navigation);
</script>

<template>
  <UContentNavigation
    highlight
    :navigation="nav"
  />
</template>
