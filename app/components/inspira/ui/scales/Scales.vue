<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

interface Props {
  orientation?: "horizontal" | "vertical" | "diagonal";
  size?: number;
  class?: HTMLAttributes["class"];
  color?: string;
  containerClass?: HTMLAttributes["class"];
}

const { orientation = "diagonal", size = 10, color, ...props } = defineProps<Props>();

function getGradientAngle() {
  switch (orientation) {
    case "horizontal":
      return "0deg";
    case "vertical":
      return "90deg";
    case "diagonal":
    default:
      return "315deg";
  }
}
</script>

<template>
  <div :class="cn('relative h-full w-full', props.containerClass)">
    <div
      :class="
        cn(
          'absolute inset-0 h-full w-full overflow-hidden',
          '[--pattern-scales:var(--color-neutral-950)]/10',
          'dark:[--pattern-scales:var(--color-white)]/10',
          props.class,
        )
      "
      :style="{
        '--scales-size': `${size}px`,
        '--scales-angle': getGradientAngle(),
        ...(color && { '--pattern-scales': color }),
      }"
    >
      <div
        class="h-full w-full bg-[repeating-linear-gradient(var(--scales-angle),var(--pattern-scales)_0,var(--pattern-scales)_1px,transparent_0,transparent_50%)]"
        :style="{
          backgroundSize: `var(--scales-size) var(--scales-size)`,
        }"
      />
    </div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
