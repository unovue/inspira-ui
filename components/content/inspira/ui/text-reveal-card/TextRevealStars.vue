<template>
  <div class="absolute inset-0">
    <Motion
      is="span"
      v-for="i in starsCount"
      :key="`star-${i}`"
      :initial="generatePosition()"
      :enter="generateEnterAnimation()"
      :duration="randomDuration"
      :class="cn('inline-block absolute w-0.5 h-0.5 bg-white rounded-full z-[1]', props.class)"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";

interface Props {
  starsCount: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  starsCount: 130,
  class: "",
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
    transition: {
      opacity: {
        duration: 1000,
        repeat: Infinity,
        type: "tween",
      },
      scale: {
        duration: 1000,
        repeat: Infinity,
        type: "tween",
      },
      repeat: Infinity,
      ease: "linear",
    },
  };
}

const randomDuration = random() * 10000 + 20000;
</script>
