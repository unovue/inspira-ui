<template>
  <div
    ref="iconRef"
    v-motion
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
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from "vue";

const iconRef = ref<HTMLDivElement | null>(null);

const mouseX = inject("mouseX", ref(Infinity));
const magnification = inject("magnification", 60);
const distance = inject("distance", 140);

const margin = ref(0);

const calculateDistance = (val: number) => {
  const bounds = iconRef.value?.getBoundingClientRect() || { x: 0, width: 0 };
  return val - bounds.x - bounds.width / 2;
};

const iconWidth = computed(() => {
  const distanceCalc = calculateDistance(mouseX.value);

  if (Math.abs(distanceCalc) < distance) {
    return (1 - Math.abs(distanceCalc) / distance) * magnification + 40;
  }

  return 40;
});
</script>
