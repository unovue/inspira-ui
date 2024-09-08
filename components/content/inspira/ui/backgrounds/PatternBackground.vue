<template>
  <div
    :class="
      cn(
        `h-[36rem] w-full dark:bg-black bg-white relative flex items-center justify-center overflow-clip`,
        ` ${animate ? 'move-' + direction : ''} `,
        $props.class
      )
    "
  >
    <div
      class="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
    ></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { cn } from "@/lib/utils";

type Direction =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

defineProps({
  class: String,
  animate: {
    type: Boolean,
    default: () => false,
  },
  direction: {
    type: String as PropType<Direction>,
    default: () => "top",
  },
});
</script>

<style scoped>
@keyframes to-top {
  0% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0;
  }
}
@keyframes to-bottom {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}
@keyframes to-right {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
@keyframes to-left {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
@keyframes to-top-right {
  0% {
    background-position: 0 100%;
  }
  100% {
    background-position: 100% 0;
  }
}
@keyframes to-top-left {
  0% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
  }
}
@keyframes to-bottom-right {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
@keyframes to-bottom-left {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 100%;
  }
}

.move-top {
  animation: to-top 10s linear infinite;
}
.move-bottom {
  animation: to-bottom 10s linear infinite;
}
.move-right {
  animation: to-right 10s linear infinite;
}
.move-left {
  animation: to-left 10s linear infinite;
}
.move-top-right {
  animation: to-top-right 10s linear infinite;
}
.move-top-left {
  animation: to-top-left 10s linear infinite;
}
.move-bottom-right {
  animation: to-bottom-right 10s linear infinite;
}
.move-bottom-left {
  animation: to-bottom-left 10s linear infinite;
}
</style>
