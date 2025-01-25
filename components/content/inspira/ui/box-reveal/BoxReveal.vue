<template>
  <div :class="cn('relative', $props.class)">
    <span
      v-motion
      :initial="initialMainVariants"
      :visible-once="visibleMainVariants"
    >
      <slot />
    </span>
    <span
      v-motion
      class="box-background absolute inset-0 z-20"
      :initial="initialSlideVariants"
      :visible-once="visibleSlideVariants"
    ></span>
  </div>
</template>

<script lang="ts" setup>
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
const initialMainVariants = { opacity: 0, y: 75 };
const visibleMainVariants = {
  opacity: 1,
  y: 0,
  transition: {
    duration: props.duration * 1000,
    delay: props.delay * 1000,
  },
};

const initialSlideVariants = { left: "0%" };
const visibleSlideVariants = {
  left: "100%",
  transition: {
    duration: props.duration * 1000,
    ease: "easeIn",
    delay: props.delay * 1000,
  },
};
</script>

<style scoped>
.box-background {
  background: v-bind(color);
}
</style>
