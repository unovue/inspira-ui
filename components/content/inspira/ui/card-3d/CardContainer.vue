<template>
  <div
    :class="['flex items-center justify-center p-2', containerClass]"
    style="perspective: 1000px"
  >
    <div
      ref="containerRef"
      :class="[
        'relative flex items-center justify-center transition-all duration-200 ease-linear',
        $props.class,
      ]"
      style="transform-style: preserve-3d"
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouseState } from "@/composables/useMouseState";
import { provide, ref } from "vue";

defineProps({
  class: String,
  containerClass: String,
});

const containerRef = ref<HTMLElement | null>(null);

const mouseState = useMouseState(); // Use the composable
provide("use3DCardMouseState", mouseState);

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return;
  const { left, top, width, height } = containerRef.value.getBoundingClientRect();
  const x = (e.clientX - left - width / 2) / 25;
  const y = (e.clientY - top - height / 2) / 25;
  containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
}

function handleMouseEnter() {
  mouseState.setMouseEntered(true);
}

function handleMouseLeave() {
  if (!containerRef.value) return;

  mouseState.setMouseEntered(false);
  containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
}
</script>
