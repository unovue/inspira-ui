<script lang="ts" setup>
const { locale } = useDocusI18n();

const links = [
  {
    icon: "tabler:rocket",
    title: "Getting Started",
    description: "Learn core concepts, setup, and first steps for Inspira UI.",
    to: `/${locale.value}/getting-started`,
  },
  {
    icon: "tabler:play",
    title: "Installation",
    description: "Install and configure Inspira UI in your project.",
    to: `/${locale.value}/getting-started/installation`,
  },
  {
    icon: "tabler:components",
    title: "Components",
    description: "Explore components, examples, and API props.",
    to: `/${locale.value}/components`,
  },
  // {
  //   icon: "tabler:blocks",
  //   title: "Blocks",
  //   description: "Kick off your journey with installation, setup, and usage guides.",
  //   to: `/${locale.value}/blocks`,
  // },
];
</script>

<template>
  <UPageSection
    id="quickLinks"
    title="Quick Links"
    description="Links to get you started with Inspira UI"
  >
    <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
      <UPageCard
        v-for="link in links"
        :key="link.to"
        v-bind="link"
        class="bg-default/15 hover:bg-default/25"
      />
    </div>
  </UPageSection>
</template>
