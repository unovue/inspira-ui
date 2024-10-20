<template>
  <div
    ref="dockRef"
    :class="
      cn(
        'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max rounded-2xl border p-2 backdrop-blur-md transition-all gap-4',
        $props.class,
        dockClass,
      )
    "
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  magnification: {
    type: Number,
    default: 60,
  },
  distance: {
    type: Number,
    default: 140,
  },
  direction: {
    type: String,
    default: "middle",
  },
});

const dockRef = ref<HTMLElement | null>(null);
const mouseX = ref(Infinity);

const dockClass = computed(() => ({
  "items-start": props.direction === "top",
  "items-center": props.direction === "middle",
  "items-end": props.direction === "bottom",
}));

const onMouseMove = (e: MouseEvent) => {
  requestAnimationFrame(() => {
    mouseX.value = e.pageX;
  });
};

const onMouseLeave = () => {
  mouseX.value = Infinity;
};

provide("mouseX", mouseX);
provide("magnification", props.magnification);
provide("distance", props.distance);
</script>
