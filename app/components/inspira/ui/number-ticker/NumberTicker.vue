<script setup lang="ts">
import { TransitionPresets, useElementVisibility, useTransition } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { cn } from "@/lib/utils";

type TransitionsPresetsKeys = keyof typeof TransitionPresets;

interface NumberTickerProps {
  value?: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  class?: string;
  transition?: TransitionsPresetsKeys;
}

const props = withDefaults(defineProps<NumberTickerProps>(), {
  value: 0,
  direction: "up",
  delay: 0,
  duration: 1000,
  decimalPlaces: 2,
  transition: "easeOutCubic",
});

const spanRef = ref<HTMLSpanElement>();

const transitionValue = ref(props.direction === "down" ? props.value : 0);

const transitionOutput = useTransition(transitionValue, {
  delay: props.delay,
  duration: props.duration,
  transition: TransitionPresets[props.transition],
});

const output = computed(() => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces,
  }).format(Number(transitionOutput.value.toFixed(props.decimalPlaces)));
});

const isInView = useElementVisibility(spanRef, {
  threshold: 0,
});

const hasBeenInView = ref(false);

const stopIsInViewWatcher = watch(
  isInView,
  (isVisible) => {
    if (isVisible && !hasBeenInView.value) {
      hasBeenInView.value = true;
      transitionValue.value = props.direction === "down" ? 0 : props.value;
      stopIsInViewWatcher();
    }
  },
  { immediate: true },
);

watch(
  () => props.value,
  (newVal) => {
    if (hasBeenInView.value) {
      transitionValue.value = props.direction === "down" ? 0 : newVal;
    }
  },
);
</script>

<template>
  <span
    ref="spanRef"
    :class="cn('inline-block tracking-wider text-black tabular-nums dark:text-white', props.class)"
  >
    {{ output }}
  </span>
</template>
