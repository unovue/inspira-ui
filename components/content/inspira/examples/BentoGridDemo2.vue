<template>
  <BentoGrid class="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3">
    <BentoGridCard
      v-for="(feature, index) in features"
      :key="index"
      v-bind="feature"
      :class="feature.class"
    >
      <template
        v-if="feature.image"
        #background
      >
        <div
          class="absolute right-0 top-0 size-full bg-center opacity-40 transition duration-150 ease-in-out group-hover:opacity-20"
          :style="`background-image: url('${feature.image}')`"
        ></div>
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
    image:
      "https://images.pexels.com/photos/2762083/pexels-photo-2762083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Learn more",
    class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    image:
      "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    description: "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    image:
      "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Learn more",
    class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
</script>
