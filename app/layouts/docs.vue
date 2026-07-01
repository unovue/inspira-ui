<script lang="ts" setup>
import "dialkit/styles.css";

const route = useRoute();
const isRoot = isRootPage();
</script>

<template>
  <UMain class="relative -mt-16 pt-16">
    <ComponentStatusMarquee class="relative mt-0" />
    <div class="dark:pattern-background-d pattern-background-l absolute inset-0 z-[-1]" />
    <AppHeaderNav />
    <UContainer>
      <UPage :key="route.fullPath">
        <template #left>
          <UPageAside v-if="!isRoot">
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
          <UPageAside v-else>
            <DocsAsideLeftTop />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
