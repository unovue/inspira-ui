<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    slotClass?: HTMLAttributes["class"];
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
  }>(),
  {
    class: "",
    slotClass: "",
    gradientSize: 200,
    gradientColor: "#262626",
    gradientOpacity: 0.8,
  },
);

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
});

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(0, 0, 0, 0) 70%
  )`;
});
</script>

<template>
  <div
    class="group relative flex size-full overflow-hidden rounded-xl border bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white"
    :class="[$props.class]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="relative z-10"
      :class="[props.slotClass]"
    >
      <slot />
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: backgroundStyle,
        opacity: gradientOpacity,
      }"
    />
  </div>
</template>
