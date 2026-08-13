<script setup lang="ts">
import type { UseInViewOptions } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion, useInView } from "motion-v";
import { computed, ref, watch } from "vue";

export type HighlightDirection = "ltr" | "rtl" | "ttb" | "btt";
export type HighlightTrigger = "hover" | "ref" | "inView" | "auto";

interface Props {
  as?: string;
  triggerType?: HighlightTrigger;
  transition?: Record<string, unknown>;
  useInViewOptions?: Record<string, unknown>;
  class?: HTMLAttributes["class"];
  highlightColor?: string;
  direction?: HighlightDirection;
}

const props = withDefaults(defineProps<Props>(), {
  as: "span",
  triggerType: "inView",
  transition: () => ({ type: "spring", duration: 1, delay: 0, bounce: 0 }),
  useInViewOptions: () => ({ once: true, initial: false, amount: 0.1 }),
  highlightColor: "hsl(25 90% 80%)",
  direction: "ltr",
});

const elementRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);
const isTriggered = ref(false);
const currentDirection = ref<HighlightDirection>(props.direction);
const isInView = useInView(elementRef, props.useInViewOptions as UseInViewOptions);

watch(
  () => props.direction,
  (direction) => {
    currentDirection.value = direction;
  },
);

const shouldAnimate = computed(() => {
  if (props.triggerType === "hover") return isHovered.value;
  if (props.triggerType === "ref") return isTriggered.value;
  if (props.triggerType === "auto") return true;
  return isInView.value;
});

const backgroundPosition = computed(() => {
  if (currentDirection.value === "rtl") return "100% 0%";
  if (currentDirection.value === "btt") return "0% 100%";
  return "0% 0%";
});

const initialSize = computed(() =>
  currentDirection.value === "ttb" || currentDirection.value === "btt" ? "100% 0%" : "0% 100%",
);
const targetSize = computed(() => (shouldAnimate.value ? "100% 100%" : initialSize.value));

function animate(direction = props.direction) {
  currentDirection.value = direction;
  isTriggered.value = true;
}

function reset() {
  isTriggered.value = false;
}

defineExpose({ animate, reset });
</script>

<template>
  <component
    :is="props.as"
    ref="elementRef"
    @pointerenter="props.triggerType === 'hover' && (isHovered = true)"
    @pointerleave="props.triggerType === 'hover' && (isHovered = false)"
  >
    <Motion
      as="span"
      :class="cn('inline', props.class)"
      :style="{
        backgroundImage: `linear-gradient(${props.highlightColor}, ${props.highlightColor})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition,
        backgroundSize: targetSize,
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
      }"
      :initial="{ backgroundSize: initialSize }"
      :animate="{ backgroundSize: targetSize }"
      :transition="props.transition"
    >
      <slot />
    </Motion>
  </component>
</template>
