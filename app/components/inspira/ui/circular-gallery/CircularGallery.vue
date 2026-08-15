<script setup lang="ts">
import type { HTMLAttributes, VNode } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Comment, computed, Fragment, isVNode, ref, useSlots } from "vue";

export type CircularGalleryDirection = "normal" | "reverse";

interface Props {
  radius?: number;
  duration?: number;
  easing?: string;
  direction?: CircularGalleryDirection;
  class?: HTMLAttributes["class"];
  pauseOnHover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  radius: 100,
  duration: 10,
  easing: "linear",
  direction: "normal",
  pauseOnHover: false,
});

const slots = useSlots();

function flattenChildren(value: unknown): VNode[] {
  if (Array.isArray(value)) return value.flatMap(flattenChildren);
  if (!isVNode(value) || value.type === Comment) return [];
  if (value.type === Fragment) return flattenChildren(value.children);
  return [value];
}

const children = computed(() => flattenChildren(slots.default?.()));
const offsets = computed(() =>
  children.value.map((_, index) => (index * 360) / Math.max(children.value.length, 1)),
);
const isHovered = ref(false);

function itemStyle(index: number) {
  return {
    "--circling-duration": `${Math.max(props.duration, 0.1)}s`,
    "--circling-radius": props.radius,
    "--circling-offset": offsets.value[index],
    "--circling-direction": props.direction === "reverse" ? -1 : 1,
    animationDuration: `${Math.max(props.duration, 0.1)}s`,
    animationTimingFunction: props.easing,
    animationPlayState: props.pauseOnHover && isHovered.value ? "paused" : "running",
  };
}
</script>

<template>
  <div
    :class="cn('group/circling relative z-0 size-0', props.class)"
    @pointerenter="isHovered = true"
    @pointerleave="isHovered = false"
  >
    <div
      v-for="(child, index) in children"
      :key="child.key ?? index"
      class="animate-circling absolute top-0 left-0 size-0 transform-gpu will-change-transform"
      :style="itemStyle(index)"
    >
      <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <component :is="child" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes circling {
  0% {
    transform: rotate(calc(var(--circling-direction, 1) * (var(--circling-offset) * 1deg)))
      translate(calc(var(--circling-radius) * 1px), 0)
      rotate(calc(var(--circling-direction, 1) * (var(--circling-offset) * -1deg)));
  }

  100% {
    transform: rotate(
        calc(var(--circling-direction, 1) * (360deg + (var(--circling-offset) * 1deg)))
      )
      translate(calc(var(--circling-radius) * 1px), 0)
      rotate(calc(var(--circling-direction, 1) * (-360deg + (var(--circling-offset) * -1deg))));
  }
}

.animate-circling {
  animation-name: circling;
  animation-iteration-count: infinite;
}
</style>
