<template>
  <div class="flex flex-col items-center justify-center px-4 py-6 font-heading md:px-8">
    <HeroSectionV2 />
    <div class="mb-16 flex w-full flex-col items-center -mt-20 z-[999]">
      <a
        href="https://github.com/sponsors/rahul-vashishtha"
        target="_blank"
      >
        <UiButton
          variant="secondary"
          class="gap-2 py-6 text-base"
        >
          {{ $t("page.home.SupportUs") }}<span class="text-red-500">♥️</span>
        </UiButton>
      </a>
    </div>
    <InspiraCarbonAds :is-home-page="true" />

    <IntegrationSection />
    <FeatureSection />
    <HomePageExamples />
    <Testimonials />
    <FluidCursor />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();

useSeoMeta({
  title: `Inspira UI: Build beautiful websites using Vue & Nuxt`,
  ogTitle: `Inspira UI: Build beautiful websites using Vue & Nuxt`,
  description:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogDescription:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogImage: config.value.site.ogImage,
  twitterCard: "summary_large_image",
});
</script>
