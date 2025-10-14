<script setup lang="ts">
import AppHeaderNav from "~/components/common/app-header-nav/AppHeaderNav.vue";
</script>

<template>
  <UMain>
    <UContainer>
      <AppHeaderNav />
      <UPage>
        <template #left>
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
