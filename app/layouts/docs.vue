<script lang="ts" setup>
const route = useRoute();
const isRoot = isRootPage();
</script>

<template>
  <UMain class="relative -mt-16 pt-16">
    <div class="dark:pattern-background-d pattern-background-l absolute inset-0 z-[-1]" />
    <AppHeaderNav />
    <UContainer>
      <UPage :key="route.fullPath">
        <template
          v-if="!isRoot"
          #left
        >
          <UPageAside>
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
