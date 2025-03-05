<template>
  <div class="absolute inset-0 overflow-hidden">
    <div
      v-for="star in stars"
      :key="star.id"
      :style="{
        top: star.top,
        left: star.left,
        width: `${star.size}px`,
        height: `${star.size}px`,
        '--inspira-twinkle-duration': `${star.twinkleDuration}s`,
        '--inspira-drift-duration': `${star.driftDuration}s`,
        '--inspira-drift-direction': `${star.driftDirection}px`,
        '--inspira-opacity-start': star.opacityStart,
        '--inspira-opacity-end': star.opacityEnd,
      }"
      class="star absolute rounded-full bg-white"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  starsCount?: number;
}

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  twinkleDuration: number;
  driftDuration: number;
  driftDirection: number;
  opacityStart: number;
  opacityEnd: number;
}

const props = withDefaults(defineProps<Props>(), {
  starsCount: 130,
});

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomSize(): number {
  // Randomly return either 1 or 2
  return Math.random() < 0.5 ? 1 : 2;
}

const stars = computed(() =>
  Array.from(
    { length: props.starsCount },
    (_, i): Star => ({
      id: i,
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`,
      size: randomSize(),
      twinkleDuration: random(2, 4),
      driftDuration: random(5, 10),
      driftDirection: random(-50, 50),
      opacityStart: random(0.1, 0.3),
      opacityEnd: random(0.7, 1),
    }),
  ),
);
</script>

<style scoped>
.star {
  opacity: var(--inspira-opacity-start);
  animation:
    twinkle var(--inspira-twinkle-duration) ease-in-out infinite alternate,
    drift var(--inspira-drift-duration) linear infinite;
}

@keyframes twinkle {
  0% {
    opacity: var(--inspira-opacity-start);
  }
  100% {
    opacity: var(--inspira-opacity-end);
  }
}

@keyframes drift {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(var(--inspira-drift-direction), calc(var(--inspira-drift-direction) / 2));
  }
  50% {
    transform: translate(calc(var(--inspira-drift-direction) / 2), var(--inspira-drift-direction));
  }
  75% {
    transform: translate(
      calc(var(--inspira-drift-direction) * -1),
      calc(var(--inspira-drift-direction) / 2)
    );
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
