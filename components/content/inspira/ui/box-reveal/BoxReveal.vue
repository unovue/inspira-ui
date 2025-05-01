<template>
  <div :class="cn('relative', $props.class)">
    <Motion
      :initial="initialMainVariants"
      :while-in-view="visibleMainVariants"
      :transition="{
        duration: props.duration,
        delay: props.delay * 2,
      }"
    >
      <slot />
    </Motion>
    <Motion
      class="box-background absolute inset-0 z-20"
      :initial="initialSlideVariants"
      :while-in-view="visibleSlideVariants"
      :transition="{
        duration: props.duration,
        ease: 'easeIn',
        delay: props.delay,
      }"
    ></Motion>
  </div>
</template>

<script lang="ts" setup>
import { Motion } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface BoxRevealProps {
  color?: string;
  duration?: number;
  class?: HTMLAttributes["class"];
  delay?: number;
}

const props = withDefaults(defineProps<BoxRevealProps>(), {
  color: "#5046e6",
  duration: 0.5,
  delay: 0.25,
});

// Motion variants
const initialMainVariants = { opacity: 0, y: 25 };
const visibleMainVariants = {
  opacity: 1,
  y: 0,
};

const initialSlideVariants = { left: "0%" };
const visibleSlideVariants = {
  left: "100%",
};
</script>

<style scoped>
.box-background {
  background: v-bind(color);
}
</style>
