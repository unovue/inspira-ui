<template>
  <div
    :class="
      cn(
        patternBackgroundVariants({ variant, size, mask }),
        ` ${animate ? 'move-' + direction : ''} `,
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { BaseProps as Props } from ".";
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
  patternBackgroundVariants,
} from ".";

const props = withDefaults(defineProps<Props>(), {
  direction: () => PATTERN_BACKGROUND_DIRECTION.Top,
  variant: () => PATTERN_BACKGROUND_VARIANT.Grid,
  speed: () => PATTERN_BACKGROUND_SPEED.Default,
  size: undefined,
  mask: undefined,
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
  animation: to-top v-bind(speed) linear infinite;
}
.move-bottom {
  animation: to-bottom v-bind(speed) linear infinite;
}
.move-right {
  animation: to-right v-bind(speed) linear infinite;
}
.move-left {
  animation: to-left v-bind(speed) linear infinite;
}
.move-top-right {
  animation: to-top-right v-bind(speed) linear infinite;
}
.move-top-left {
  animation: to-top-left v-bind(speed) linear infinite;
}
.move-bottom-right {
  animation: to-bottom-right v-bind(speed) linear infinite;
}
.move-bottom-left {
  animation: to-bottom-left v-bind(speed) linear infinite;
}
</style>
