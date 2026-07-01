<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  class?: HTMLAttributes["class"];
}

const { min, max, step, ...props } = defineProps<Props>();

const modelValue = defineModel<number>({ required: true });

const valueLabel = computed(() =>
  Number.isInteger(modelValue.value)
    ? `${modelValue.value}`
    : `${Number(modelValue.value.toFixed(2))}`,
);
</script>

<template>
  <div
    class="flex w-full min-w-0 items-center gap-3 sm:min-w-52"
    :class="props.class"
  >
    <USlider
      v-model="modelValue"
      color="neutral"
      size="sm"
      class="w-full"
      :min="min"
      :max="max"
      :step="step"
      :ui="{
        track: 'bg-muted/55',
        thumb:
          'ring-default bg-highlighted shadow-sm transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-110',
      }"
    />
    <span
      class="text-highlighted bg-default/80 ring-default/70 min-w-12 rounded-full px-2.5 py-1 text-right font-mono text-xs tabular-nums ring"
    >
      {{ valueLabel }}
    </span>
  </div>
</template>
