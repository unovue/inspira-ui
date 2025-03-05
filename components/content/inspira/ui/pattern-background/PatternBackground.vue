<template>
  <div
    :class="
      cn(
        patternBackgroundVariants({ variant, size }),
        ` ${animate ? 'move move-' + direction : ''} `,
        props.class,
      )
    "
  >
    <div
      :class="
        cn(
          'absolute pointer-events-none inset-0 flex items-center justify-center',
          patternBackgroundMaskVariants({ mask }),
        )
      "
    ></div>
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
  patternBackgroundMaskVariants,
  patternBackgroundVariants,
} from ".";
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
  direction: () => PATTERN_BACKGROUND_DIRECTION.Top,
  variant: () => PATTERN_BACKGROUND_VARIANT.Grid,
  speed: () => PATTERN_BACKGROUND_SPEED.Default,
  size: undefined,
  mask: undefined,
});

const durationFormSpeed = computed(() => `${props.speed}ms`);
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

.move {
  animation-duration: v-bind(durationFormSpeed);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.move-top {
  animation-name: to-top;
}
.move-bottom {
  animation-name: to-bottom;
}
.move-right {
  animation-name: to-right;
}
.move-left {
  animation-name: to-left;
}
.move-top-right {
  animation-name: to-top-right;
}
.move-top-left {
  animation-name: to-top-left;
}
.move-bottom-right {
  animation-name: to-bottom-right;
}
.move-bottom-left {
  animation-name: to-bottom-left;
}
</style>
