<script setup lang="ts">
import { computed, inject, ref } from "vue";
import {
  DISTANCE_INJECTION_KEY,
  MAGNIFICATION_INJECTION_KEY,
  MOUSE_X_INJECTION_KEY,
  MOUSE_Y_INJECTION_KEY,
  ORIENTATION_INJECTION_KEY,
} from "./injectionKeys";

const iconRef = ref<HTMLDivElement | null>(null);

const mouseX = inject(MOUSE_X_INJECTION_KEY, ref(Infinity));
const mouseY = inject(MOUSE_Y_INJECTION_KEY, ref(Infinity));
const distance = inject(DISTANCE_INJECTION_KEY);
const orientation = inject(ORIENTATION_INJECTION_KEY, "vertical");
const magnification = inject(MAGNIFICATION_INJECTION_KEY);
const isVertical = computed(() => orientation === "vertical");

const margin = ref(0);

function calculateDistance(val: number) {
  if (isVertical.value) {
    const bounds = iconRef.value?.getBoundingClientRect() || {
      y: 0,
      height: 0,
    };
    return val - bounds.y - bounds.height / 2;
  }
  const bounds = iconRef.value?.getBoundingClientRect() || { x: 0, width: 0 };
  return val - bounds.x - bounds.width / 2;
}

const iconWidth = computed(() => {
  const distanceCalc = isVertical.value
    ? calculateDistance(mouseY.value)
    : calculateDistance(mouseX.value);
  if (!distance?.value || !magnification?.value) return 40;
  if (Math.abs(distanceCalc) < distance?.value) {
    return (1 - Math.abs(distanceCalc) / distance?.value) * magnification?.value + 40;
  }

  return 40;
});
</script>

<template>
  <div
    ref="iconRef"
    class="flex aspect-square cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-out"
    :style="{
      width: `${iconWidth}px`,
      height: `${iconWidth}px`,
    }"
    :hovered="{
      marginLeft: margin,
      marginRight: margin,
    }"
  >
    <slot />
  </div>
</template>
