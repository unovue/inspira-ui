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
    class="flex w-full min-w-0 items-center gap-3 sm:min-w-48"
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
        track: 'bg-muted/70',
        thumb:
          'shadow-sm transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-110',
      }"
    />
    <span
      class="text-highlighted bg-elevated/70 ring-default/70 min-w-12 rounded-full px-2.5 py-1 text-right text-xs font-medium tabular-nums ring"
    >
      {{ valueLabel }}
    </span>
  </div>
</template>
