<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { Motion, useTransform } from "motion-v";
import { computed, inject } from "vue";
import { CardStackKey } from "./CardStackContext";

interface Props {
  index: number;
  topPosition?: string;
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const props = defineProps<Props>();
const context = inject(CardStackKey, null);

if (!context) {
  throw new Error("CardStackItem must be used within <CardStack>");
}

const totalCards = Math.max(context.totalCards, 1);
const scaleTo = 1 - (totalCards - props.index) * (context.scaleMultiplier ?? 0.03);
const scale = useTransform(context.progress, [props.index / totalCards, 1], [1, scaleTo]);
const top = computed(() => props.topPosition ?? `${5 + props.index * 3}%`);
</script>

<template>
  <div
    v-bind="$attrs"
    :class="cn('sticky top-0 h-full', props.class)"
  >
    <Motion
      :style="{ top, scale }"
      class="relative h-full origin-top"
    >
      <slot />
    </Motion>
  </div>
</template>
