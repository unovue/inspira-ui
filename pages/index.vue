<template>
  <div class="flex flex-col items-center justify-center px-4 py-6 md:px-8 font-heading">
    <HeroSection />
    <div class="w-full flex flex-col items-center mb-16">
      <a
        href="https://github.com/sponsors/rahul-vashishtha"
        target="_blank"
      >
        <UiButton
          variant="secondary"
          class="gap-2 text-base py-6"
        >
          Become a Sponsor <span class="text-red-500">♥️</span>
        </UiButton>
      </a>
    </div>
    <FeatureSection />
    <HomePageExamples />
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();

useSeoMeta({
  title: `Home - ${config.value.site.name}`,
  ogTitle: `Home - ${config.value.site.name}`,
  description:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogDescription:
    "Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.",
  ogImage: config.value.site.ogImage,
  twitterCard: "summary_large_image",
});
</script>
