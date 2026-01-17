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
</script>

<template>
  <div
    class="flex w-full min-w-48 items-center gap-2"
    :class="props.class"
  >
    <USlider
      v-model="modelValue"
      class="w-full"
      :min="min"
      :max="max"
      :step="step"
    />
    <span>{{ modelValue }}</span>
  </div>
</template>
