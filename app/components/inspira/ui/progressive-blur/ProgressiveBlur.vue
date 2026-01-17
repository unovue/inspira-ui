<script setup lang="ts">
import type { MotionProps } from "motion-v";
import { Motion } from "motion-v";
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
  direction: "bottom",
  blurLayers: 8,
  blurIntensity: 0.25,
});

const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  class?: string;
  blurIntensity?: number;
} & MotionProps<"div">;

interface Props extends ProgressiveBlurProps {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  class?: string;
  blurIntensity?: number;
}

// Get all non-declared props to pass to motion component
const attrs = useAttrs();

const layers = computed(() => Math.max(props.blurLayers, 2));
const segmentSize = computed(() => 1 / (props.blurLayers + 1));
const hasPositionClass = computed(
  () =>
    typeof props.class === "string" &&
    // eslint-disable-next-line regexp/no-unused-capturing-group
    /\b(absolute|fixed|relative|sticky|static)\b/.test(props.class),
);

const getGradientStyle = (index: number) => {
  const gradientStops = [
    (index - 1) * segmentSize.value,
    index * segmentSize.value,
    (index + 1) * segmentSize.value,
    (index + 2) * segmentSize.value,
  ].map(
    (pos, posIndex) =>
      `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`,
  );

  return `linear-gradient(${GRADIENT_ANGLES[props.direction]}deg, ${gradientStops.join(", ")})`;
};
</script>

<template>
  <div :class="[!hasPositionClass && 'relative', props.class]">
    <Motion
      v-for="index in layers"
      :key="index"
      as="div"
      class="pointer-events-none absolute inset-0 rounded-[inherit]"
      :style="{
        maskImage: getGradientStyle(index),
        webkitMaskImage: getGradientStyle(index),
        backdropFilter: `blur(${(index - 1) * props.blurIntensity}px)`,
      }"
      v-bind="attrs"
    />
  </div>
</template>
