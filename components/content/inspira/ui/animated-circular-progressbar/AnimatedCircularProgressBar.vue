<template>
  <div
    class="progress-circle-base"
    :class="cn('relative size-40 text-2xl font-semibold', props.class)"
  >
    <svg
      fill="none"
      class="size-full"
      stroke-width="2"
      viewBox="0 0 100 100"
    >
      <circle
        v-if="currentPercent <= 90 && currentPercent >= 0"
        cx="50"
        cy="50"
        r="45"
        :stroke-width="circleStrokeWidth"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge-secondary-stroke opacity-100"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        :stroke-width="circleStrokeWidth"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge-primary-stroke opacity-100"
      />
    </svg>
    <span
      v-if="showPercentage"
      :data-current-value="currentPercent"
      class="absolute inset-0 m-auto size-fit delay-0 duration-1000 ease-linear animate-in fade-in"
    >
      {{ currentPercent }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  max?: number;
  value?: number;
  min?: number;
  gaugePrimaryColor?: string;
  gaugeSecondaryColor?: string;
  class?: string;
  circleStrokeWidth?: number;
  showPercentage?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  min: 0,
  value: 0,
  gaugePrimaryColor: "rgb(79 70 229)",
  gaugeSecondaryColor: "rgba(0, 0, 0, 0.1)",
  circleStrokeWidth: 10,
  showPercentage: true,
  duration: 1,
});

const circumference = 2 * Math.PI * 45;
const percentPx = circumference / 100;

const currentPercent = computed(() => ((props.value - props.min) / (props.max - props.min)) * 100);
const percentageInPx = computed(() => `${percentPx}px`);
const durationInSeconds = computed(() => `${props.duration}s`);
</script>

<style scoped lang="css">
.progress-circle-base {
  --circle-size: 100px;
  --circumference: v-bind(circumference);
  --percent-to-px: v-bind(percentageInPx);
  --gap-percent: 5;
  --offset-factor: 0;
  --transition-step: 200ms;
  --percent-to-deg: 3.6deg;
  transform: translateZ(0);
}

.gauge-primary-stroke {
  stroke: v-bind(gaugePrimaryColor);
  --stroke-percent: v-bind(currentPercent);
  stroke-dasharray: calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference);
  transition:
    v-bind(durationInSeconds) ease,
    stroke v-bind(durationInSeconds) ease;
  transition-property: stroke-dasharray, transform;
  transform: rotate(
    calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg))
  );
  transform-origin: calc(var(--circle-size) / 2) calc(var(--circle-size) / 2);
}

.gauge-secondary-stroke {
  stroke: v-bind(gaugeSecondaryColor);
  --stroke-percent: 90 - v-bind(currentPercent);
  --offset-factor-secondary: calc(1 - var(--offset-factor));
  stroke-dasharray: calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference);
  transform: rotate(
      calc(
        1turn - 90deg -
          (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary))
      )
    )
    scaleY(-1);
  transition: all v-bind(durationInSeconds) ease;
  transform-origin: calc(var(--circle-size) / 2) calc(var(--circle-size) / 2);
}
</style>
