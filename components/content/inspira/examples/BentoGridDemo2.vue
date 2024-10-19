<template>
  <BentoGrid
    class="lg:grid-rows-3 grid w-full auto-rows-[22rem] grid-cols-3 gap-4"
  >
    <BentoGridCard
      v-for="(feature, index) in features"
      :key="index"
      v-bind="feature"
      :class="feature.class"
    >
      <template #background>
        <img class="absolute -right-20 -top-20 opacity-60" />
      </template>
    </BentoGridCard>
  </BentoGrid>
</template>

<script lang="ts" setup>
import BentoGridCard from "../ui/bento-grid/BentoGridCard.vue";

const features = [
  {
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
</script>
