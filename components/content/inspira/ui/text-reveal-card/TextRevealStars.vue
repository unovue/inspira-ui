<template>
  <div class="absolute inset-0">
    <Motion
      is="span"
      v-for="i in starsCount"
      :key="`star-${i}`"
      :initial="generatePosition()"
      :animate="generateEnterAnimation()"
      :transition="{
        duration: randomDuration,
        repeat: Infinity,
        ease: 'linear',
      }"
      :class="cn('inline-block absolute w-0.5 h-0.5 bg-white rounded-full z-[1]', props.class)"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

interface Props {
  starsCount: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  starsCount: 130,
});

function randomMove() {
  return Math.random() * 4 - 2;
}

function randomOpacity() {
  return Math.random();
}

function random() {
  return Math.random();
}

function generatePosition() {
  return {
    top: `calc(${random() * 100}% + ${randomMove()}px)`,
    left: `calc(${random() * 100}% + ${randomMove()}px)`,
  };
}

function generateEnterAnimation() {
  return {
    top: `calc(${random() * 100}% + ${randomMove()}px)`,
    left: `calc(${random() * 100}% + ${randomMove()}px)`,
    opacity: randomOpacity(),
    scale: [1, 1.2, 0],
  };
}

const randomDuration = random() * 10 + 20;
</script>
