<template>
  <p
    :style="styleVar"
    :class="
      cn(
        'mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70',
        // Radiant effect
        'radiant-animation bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--radiant-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
        // Radiant gradient
        'bg-gradient-to-r from-transparent via-black via-50% to-transparent  dark:via-white',
        $props.class,
      )
    "
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { computed } from "vue";

const props = defineProps({
  duration: {
    type: Number,
    default: 10,
  },
  radiantWidth: {
    type: Number,
    default: 100,
  },
  class: String,
});

const styleVar = computed(() => {
  return {
    "--radiant-anim-duration": `${props.duration}s`,
    "--radiant-width": `${props.radiantWidth}px`,
  };
});
</script>

<style scoped>
@keyframes radiant {
  0%,
  90%,
  100% {
    background-position: calc(-100% - var(--radiant-width)) 0;
  }
  30%,
  60% {
    background-position: calc(100% + var(--radiant-width)) 0;
  }
}

.radiant-animation {
  animation: radiant var(--radiant-anim-duration) infinite;
}
</style>
