<template>
  <NuxtLoadingIndicator
    :color="false"
    class="z-100 bg-primary/80"
  />
  <LayoutBanner v-if="config.banner.enable" />
  <LayoutHeader />
  <div
    v-if="page && !page.fullpage"
    class="min-h-screen border-b"
  >
    <div
      class="flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10"
      :class="[
        config.main.padded && 'container',
        (page.aside ?? true) &&
          'md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]',
      ]"
    >
      <aside
        v-if="page.aside ?? true"
        class="fixed z-30 -ml-2 hidden w-full shrink-0 overflow-y-auto top-[102px] md:sticky md:block"
        :class="[
          config.aside.useLevel && config.aside.levelStyle === 'aside'
            ? 'h-[calc(100vh-3.5rem)] md:top-[61px]'
            : 'h-[calc(100vh-6rem)] md:top-[101px]',
        ]"
      >
        <Aside :is-mobile="false" />
      </aside>
      <NuxtPage />
    </div>
  </div>

  <Toaster />
  <LayoutFooter />
</template>

<script setup lang="ts">
import Toaster from "shadcn-docs-nuxt/components/ui/toast/Toaster.vue";
import Aside from "./components/layout/Aside.vue";

const { page } = useContent();
const config = useConfig();
const route = useRoute();
const { themeClass, radius } = useThemes();

const baseRouteName = computed(() => useRouteBaseName()(route));

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  twitterCard: "summary_large_image",
});

useHead({
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});
</script>
