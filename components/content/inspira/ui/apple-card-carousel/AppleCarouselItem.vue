<template>
  <Motion
    as="div"
    :initial="{
      opacity: 0,
      y: 20,
    }"
    :animate="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * index,
        ease: 'easeOut',
        once: true,
      },
    }"
    class="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
  >
    <slot></slot>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";

interface Props {
  index: number;
}

defineProps<Props>();
</script>
