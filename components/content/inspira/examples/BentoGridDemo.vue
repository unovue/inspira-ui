<template>
  <BentoGrid class="mx-auto max-w-4xl">
    <BentoGridItem
      v-for="(item, index) in items"
      :key="index"
      :class="index === 3 || index === 6 ? 'md:col-span-2' : ''"
    >
      <template #header>
        <div class="flex size-full animate-pulse space-x-4">
          <div class="flex size-full flex-1 rounded-md bg-zinc-800"></div>
        </div>
      </template>

      <template #title>
        <strong>{{ item.title }}</strong>
      </template>

      <template #icon> </template>

      <template #description>
        <p>{{ item.description }}</p>
      </template>
    </BentoGridItem>
  </BentoGrid>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and experience design.",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
  },
];
</script>
