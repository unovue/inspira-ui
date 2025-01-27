<template>
  <div
    class="slider-container relative mx-auto my-0 grid place-items-center overflow-hidden"
    :style="sliderStyles"
    @mouseenter="active = 1"
    @mouseleave="active = 0"
    @focusin="active = 1"
    @focusout="active = 0"
    @touchstart="active = 1"
    @touchend="active = 0"
  >
    <input
      id="track"
      v-model="value"
      type="range"
      min="0"
      max="100"
      class="size-full touch-none opacity-0 hover:cursor-grab focus-visible:outline-offset-4 focus-visible:outline-transparent active:cursor-grabbing"
    />
    <div
      aria-hidden="true"
      :class="
        cn('slider-value-labels pointer-events-none absolute inset-x-0 top-0 z-[2] h-1/2 text-base')
      "
      :style="sliderLabelStyles"
    ></div>
    <div
      class="slider-track pointer-events-none absolute bottom-0 w-full"
      :style="sliderTrackStyles"
    >
      <div
        class="slider-indicator absolute top-1/2 z-[2] h-3/4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-sm"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  initialValue?: number;
  leftColor?: string;
  rightColor?: string;
  minShiftLimit?: number;
  maxShiftLimit?: number;
  leftContent?: string;
  rightContent?: string;
  indicatorColor?: string;
  borderRadius?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 50,
  minShiftLimit: 40,
  maxShiftLimit: 68,
  leftContent: "LEFT",
  rightContent: "RIGHT",
  leftColor: "#e68a00",
  rightColor: "#ffffff",
  indicatorColor: "#FFFFFF",
  borderRadius: 8,
});

const value = ref(props.initialValue);
const active = ref(0);

const shift = computed(() =>
  value.value > props.minShiftLimit && value.value < props.maxShiftLimit ? 1 : 0,
);

const sliderStyles = computed(() => ({
  "--value": value.value,
  "--shift": shift.value,
  "--active": active.value,
  "--leftContent": `"${props.leftContent} "`,
  "--rightContent": `" ${props.rightContent}"`,
  "--indicatorColor": indicatorColorHsl.value,
}));

const sliderLabelStyles = computed(() => ({
  "--shift": shift.value,
}));

const sliderTrackStyles = computed(() => ({
  "--value": value.value,
  "--shift": shift.value,
  "--leftColor": leftColorHsl.value,
  "--rightColor": rightColorHsl.value,
}));

const leftColorHsl = computed(() => {
  const [h, s, l] = hexToHsl(props.leftColor);
  const alpha = 0.4;
  const lightness = 24 + (30 * (100 - value.value)) / 100;
  return `hsl(${h} ${s}% ${lightness}% / ${alpha})`;
});

const rightColorHsl = computed(() => {
  const [h, s, l] = hexToHsl(props.rightColor);
  const alpha = 0.1 + (0.4 * (100 - value.value)) / 100;
  return `hsl(${h} ${s}% ${l}% / ${alpha})`;
});

const indicatorColorHsl = computed(() => {
  const [h, s, l] = hexToHsl(props.indicatorColor); // Base color as hex, here white (#ffffff)
  const activeAlpha = active.value * 0.5 + 0.5; // Calculate alpha based on active state
  return `hsl(${h} ${s}% ${l}% / ${activeAlpha})`;
});

const borderRadiusInPx = computed(() => `${props.borderRadius}px`);

function hexToHsl(hex: string): [number, number, number] {
  // Remove "#" if present
  hex = hex.replace(/^#/, "");

  // Parse r, g, b values
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max values of r, g, b
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max != min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}
</script>

<style scoped>
.slider-container {
  --speed: 0.65s;
  --update: 0s;
  --timing: linear(
    0,
    0.5007 7.21%,
    0.7803 12.29%,
    0.8883 14.93%,
    0.9724 17.63%,
    1.0343 20.44%,
    1.0754 23.44%,
    1.0898 25.22%,
    1.0984 27.11%,
    1.1014 29.15%,
    1.0989 31.4%,
    1.0854 35.23%,
    1.0196 48.86%,
    1.0043 54.06%,
    0.9956 59.6%,
    0.9925 68.11%,
    1
  );
}

.slider-value-labels {
  transform: translateY(calc(var(--shift, 0) * 50%));
  transition: transform var(--speed) var(--timing);
  counter-reset: low var(--value) high calc(100 - var(--value));
}

.slider-value-labels::after,
.slider-value-labels::before {
  font-variant: tabular-nums;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  color: white;
  font-family: monospace;
}

.slider-value-labels::before {
  --range: calc((70 - (var(--value) / 100 * 10)) * 1%);
  color: hsl(24 74% 54%);
  content: var(--leftContent) counter(low) "%";
  mask: linear-gradient(90deg, hsl(0 0% 100% / 0.6) var(--range), hsl(0 0% 100% / 1) var(--range));
  left: 0.5rem;
}

.slider-value-labels::after {
  --range: calc((50 - (var(--value) / 100 * 10)) * 1%);
  content: counter(high) "% " var(--rightContent);
  mask: linear-gradient(90deg, hsl(0 0% 100% / 1) var(--range), hsl(0 0% 100% / 0.5) var(--range));
  right: 0.5rem;
}

.slider-track {
  height: calc(50% + (var(--shift) * 50%));
  transition: height var(--speed) var(--timing);
}

.slider-track::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(var(--value, 0) * 1% - 0.5rem);
  background: var(--leftColor);
  border-radius: v-bind(borderRadiusInPx);
  transition: width var(--update);
}

.slider-track::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc((100 - var(--value, 0)) * 1% - 0.5rem);
  background: var(--rightColor);
  border-radius: v-bind(borderRadiusInPx);
  transition: width var(--update);
}

.slider-indicator {
  background: var(--indicatorColor);
  left: calc(var(--value, 0) * 1%);
  transition: left var(--update);
}

/* Range input styles */
[type="range"]::-webkit-slider-thumb {
  appearance: none;
  height: 120px;
  width: 40px;
  margin-top: 0px;
  opacity: 1;
}

[type="range"]::-webkit-slider-runnable-track {
  height: 120px;
  background: hsl(10 80% 50% / 0.5);
  margin-top: -60px;
  box-shadow:
    1px 1px 1px #000000,
    0px 0px 1px #0d0d0d;
}

[type="range"]::-moz-range-track {
  height: 120px;
  background: hsl(10 80% 50% / 0.5);
  margin-top: -60px;
  box-shadow:
    1px 1px 1px #000000,
    0px 0px 1px #0d0d0d;
}
</style>
