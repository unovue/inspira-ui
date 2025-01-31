<template>
  <span :class="cn('inline-block px-1 pb-1', props.class)"><slot /></span>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  delay?: number;
  duration?: number;
  class?: HTMLAttributes["class"];
  textEndColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 2000,
  endColor: "inherit",
});

const delayMs = computed(() => `${props.delay}ms`);
const durationMs = computed(() => `${props.duration}ms`);
</script>

<style scoped>
@keyframes background-expand {
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

@keyframes text-color-change {
  0% {
    color: inherit;
  }
  100% {
    color: v-bind(textEndColor);
  }
}

span {
  background-size: 0% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  animation:
    background-expand v-bind(durationMs) ease-in-out v-bind(delayMs) forwards,
    text-color-change v-bind(durationMs) ease-in-out v-bind(delayMs) forwards;
}
</style>
