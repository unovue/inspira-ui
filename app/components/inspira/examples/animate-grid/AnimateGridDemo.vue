<script lang="ts" setup>
import cloudflare from "./cloudflare.svg";

interface Props {
  textGlowStartColor: string;
  perspective: number;
  textGlowEndColor: string;
  rotateX: number;
  rotateY: number;
}

const props = defineProps<Props>();

const cards = Array.from({ length: 16 }, () => ({
  logo: cloudflare,
}));
</script>

<template>
  <div class="flex items-center justify-center p-4">
    <AnimateGrid
      :cards
      v-bind="props"
    >
      <template #logo="{ logo }">
        <img
          class="logo mx-auto h-10 w-auto"
          :src="logo"
        />
      </template>
    </AnimateGrid>
  </div>
</template>
