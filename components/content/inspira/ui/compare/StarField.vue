<template>
  <div class="star-field">
    <div
      v-for="star in stars"
      :key="star.id"
      :style="{
        top: star.top,
        left: star.left,
        '--twinkle-duration': `${star.twinkleDuration}s`,
        '--drift-duration': `${star.driftDuration}s`,
        '--drift-direction': `${star.driftDirection}px`,
        '--opacity-start': star.opacityStart,
        '--opacity-end': star.opacityEnd,
      }"
      class="star"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  starsCount?: number;
}

interface Star {
  id: number;
  top: string;
  left: string;
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

const stars = computed(() =>
  Array.from(
    { length: props.starsCount },
    (_, i): Star => ({
      id: i,
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`,
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
.star-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  opacity: var(--opacity-start);
  animation:
    twinkle var(--twinkle-duration) ease-in-out infinite alternate,
    drift var(--drift-duration) linear infinite;
}

/* Single twinkle keyframe using CSS variables */
@keyframes twinkle {
  0% {
    opacity: var(--opacity-start);
  }
  100% {
    opacity: var(--opacity-end);
  }
}

/* Single drift keyframe using CSS variables */
@keyframes drift {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(var(--drift-direction), calc(var(--drift-direction) / 2));
  }
  50% {
    transform: translate(calc(var(--drift-direction) / 2), var(--drift-direction));
  }
  75% {
    transform: translate(calc(var(--drift-direction) * -1), calc(var(--drift-direction) / 2));
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
