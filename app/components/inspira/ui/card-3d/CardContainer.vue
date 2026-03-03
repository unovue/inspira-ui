<script setup lang="ts">
import { cn } from "@inspira-ui/plugins";
import { provide } from "vue";
import { useMouseState } from "~/composables/useMouseState";

interface Props {
  class?: string;
  containerClass?: string;
}

const props = defineProps<Props>();

const containerRef = useTemplateRef("containerRef");

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

<template>
  <div
    style="perspective: 1000px"
    :class="cn(`flex items-center justify-center p-2`, props.containerClass)"
  >
    <div
      ref="containerRef"
      style="transform-style: preserve-3d"
      :class="
        cn(
          `relative flex items-center justify-center transition-all duration-200 ease-linear`,
          props.class,
        )
      "
      @mouseenter="handleMouseEnter"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <slot />
    </div>
  </div>
</template>
