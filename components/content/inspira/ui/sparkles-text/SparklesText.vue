<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { cn } from "~/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface Colors {
  first: string;
  second: string;
}

interface SparklesTextProps {
  as?: string;
  class?: string;
  text: string;
  sparklesCount?: number;
  colors?: Colors;
}

const props = withDefaults(defineProps<SparklesTextProps>(), {
  sparklesCount: 10,
  colors: () => ({ first: "#9E7AFF", second: "#FE8BBB" }),
});

const sparkles = ref<Sparkle[]>([]);

function generateSparkle(): Sparkle {
  const starX = `${Math.random() * 100}%`;
  const starY = `${Math.random() * 100}%`;
  const color = Math.random() > 0.5 ? props.colors.first : props.colors.second;
  const delay = Math.random() * 2;
  const scale = Math.random() * 1 + 0.3;
  const lifespan = Math.random() * 10 + 5;
  const id = `${starX}-${starY}-${Date.now()}`;
  return { id, x: starX, y: starY, color, delay, scale, lifespan };
};

function initializeSparkles() {
  sparkles.value = Array.from({ length: props.sparklesCount }, generateSparkle);
};

function updateSparkles() {
  sparkles.value = sparkles.value.map((sparkle) => {
    if (sparkle.lifespan <= 0) {
      return generateSparkle();
    } else {
      return { ...sparkle, lifespan: sparkle.lifespan - 0.1 };
    }
  });
};

useIntervalFn(updateSparkles, 100);

onMounted(() => {
  initializeSparkles();
});
</script>

<template>
  <div
    :class="cn('text-6xl font-bold', props.class)"
    class="sparkle-colors"
  >
    <span class="relative inline-block">
      <Sparkle
        v-for="sparkle in sparkles"
        :key="sparkle.id"
        v-bind="sparkle"
      />
      <strong>{{ props.text }}</strong>
    </span>
  </div>
</template>

<style scoped>
.sparkle-colors {
  --sparkles-first-color: v-bind(props.colors.first);
  --sparkles-second-color: v-bind(props.colors.second);
}
</style>
