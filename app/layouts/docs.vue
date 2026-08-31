<script lang="ts" setup>
import "dialkit/styles.css";

const route = useRoute();
const isRoot = isRootPage();
const docsPageUi = useDocsPageUi();

const showReleaseMarquee = computed(
  () => route.path.split("/").filter(Boolean).at(-1) === "components",
);
</script>

<template>
  <UMain class="bg-default relative -mt-16 pt-16">
    <ComponentStatusMarquee
      v-if="showReleaseMarquee"
      inline
    />
    <AppHeaderNav />
    <UContainer class="relative">
      <UPage
        :key="route.fullPath"
        :ui="isRoot ? undefined : docsPageUi.shell"
      >
        <template #left>
          <UPageAside
            v-if="!isRoot"
            class="lg:top-[calc(var(--ui-header-height)+3rem)] lg:ms-0 lg:max-h-[calc(100dvh-var(--ui-header-height)-3rem)] lg:px-5 lg:py-6"
          >
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
          <UPageAside
            v-else
            class="lg:top-[calc(var(--ui-header-height)+3rem)] lg:max-h-[calc(100vh-var(--ui-header-height)-3rem)]"
          >
            <DocsAsideLeftTop />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
