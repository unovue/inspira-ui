<template>
  <span
    :class="cn('relative inline-block pb-1 px-2 rounded-lg', props.class)"
    >{{ text }}</span
  >
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  class: HTMLAttributes['class'];
}

const props = defineProps<Props>();
</script>

<style scoped>
@keyframes backgroundExpand {
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

span {
  background-size: 0% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  animation: backgroundExpand ease-in-out 2s forwards;
}
</style>