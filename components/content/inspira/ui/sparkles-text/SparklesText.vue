<template>
  <div
    class="text-6xl font-bold"
    :class="props.class"
  >
    <span class="relative inline-block">
      <template
        v-for="sparkle in sparkles"
        :key="sparkle.id"
      >
        <!-- Animated star SVG with fade, scale, and rotation effects -->
        <Motion
          :initial="{ opacity: 0, scale: 0, rotate: 75 }"
          :animate="{
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
            rotate: [75, 120, 150],
          }"
          :transition="{
            duration: 0.8,
            repeat: Infinity,
            delay: sparkle.delay,
          }"
          as="svg"
          class="pointer-events-none absolute z-20"
          :style="{
            left: sparkle.x,
            top: sparkle.y,
            opacity: 0,
          }"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
            :fill="sparkle.color"
          />
        </Motion>
      </template>
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import { ref, onMounted, onUnmounted } from "vue";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface Props {
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  sparklesCount: 10,
  colors: () => ({ first: "#9E7AFF", second: "#FE8BBB" }),
});

const sparkles = ref<Sparkle[]>([]);

// Generate a new sparkle with randomized properties
function generateStar(): Sparkle {
  const starX = `${Math.random() * 100}%`;
  const starY = `${Math.random() * 100}%`;
  const color = Math.random() > 0.5 ? props.colors.first : props.colors.second;
  const delay = Math.random() * 2;
  const scale = Math.random() * 1 + 0.3;
  const lifespan = Math.random() * 10 + 5;
  const id = `${starX}-${starY}-${Date.now()}`;
  return { id, x: starX, y: starY, color, delay, scale, lifespan };
}

// Initialize sparkles array with random stars
function initializeStars() {
  sparkles.value = Array.from({ length: props.sparklesCount }, generateStar);
}

// Update sparkles - regenerate dead ones and update lifespans
function updateStars() {
  sparkles.value = sparkles.value.map((star) => {
    if (star.lifespan <= 0) {
      return generateStar();
    } else {
      return { ...star, lifespan: star.lifespan - 0.1 };
    }
  });
}

let interval: number;

// Start animation loop
onMounted(() => {
  initializeStars();
  interval = window.setInterval(updateStars, 100);
});

// Cleanup on unmount
onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>
