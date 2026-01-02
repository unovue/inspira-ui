<script lang="ts" setup>
import type { BaseProps } from "../../ui/pattern-background";
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
} from "../../ui/pattern-background";

const config = ref<Omit<BaseProps, "class">>({
  animate: true,
  direction: "bottom",
  variant: "big-dot",
  size: "md",
  mask: "ellipse-top",
  speed: PATTERN_BACKGROUND_SPEED.Slow,
});

const speedItems = [
  {
    label: "Default (10s)",
    value: 10000,
  },
  {
    label: "Slow (25s)",
    value: 25000,
  },
  {
    label: "Fast (5s)",
    value: 5000,
  },
];
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <PatternBackgroundDemo v-bind="config" />
    </template>

    <template #config>
      <UFormField
        label="animate"
        class="form-field"
      >
        <USwitch
          v-model="config.animate"
          class="max-w-40"
        />
      </UFormField>

      <UFormField
        label="direction"
        class="form-field"
      >
        <USelect
          v-model="config.direction"
          class="w-32"
          :items="[...Object.values(PATTERN_BACKGROUND_DIRECTION)]"
        />
      </UFormField>

      <UFormField
        label="variant"
        class="form-field"
      >
        <USelect
          v-model="config.variant!"
          class="w-32"
          :items="['grid', 'dot', 'big-dot']"
        />
      </UFormField>

      <UFormField
        label="size"
        class="form-field"
      >
        <USelect
          v-model="config.size!"
          class="w-32"
          :items="['xs', 'sm', 'md', 'lg', 'xl']"
        />
      </UFormField>

      <UFormField
        label="mask"
        class="form-field"
      >
        <USelect
          v-model="config.mask!"
          class="w-32"
          :items="['ellipse', 'ellipse-top']"
        />
      </UFormField>

      <UFormField
        label="speed"
        class="form-field"
      >
        <USelect
          v-model="config.speed"
          class="w-32"
          :items="speedItems"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
