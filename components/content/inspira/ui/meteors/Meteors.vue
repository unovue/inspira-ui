<template>
  <span
    v-for="index in count"
    :key="'meteor ' + index"
    :class="
      cn(
        `animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]`,
        `before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']`,
        $props.class,
      )
    "
    :style="{
      top: 0,
      left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
    }"
  ></span>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

defineProps({
  count: {
    type: Number,
    default: 20,
  },
  class: String,
});
</script>

<style scoped>
@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}

.animate-meteor {
  animation: meteor 5s linear infinite;
}
</style>
