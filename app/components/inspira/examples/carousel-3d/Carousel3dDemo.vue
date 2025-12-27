<script setup lang="ts">
interface Props {
  width?: number;
  height?: number;
}

const { width = 450, height = 600 } = defineProps<Props>();

const items = [
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/16245254/pexels-photo-16245254/free-photo-of-chatgpt-a-chatbot-for-your-website.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
</script>

<template>
  <div class="flex size-full overflow-hidden py-12">
    <Carousel3D
      :key="`${width.toString()}_${height.toString()}`"
      :items="items"
      :width="width"
      :height="height"
    />
  </div>
</template>
