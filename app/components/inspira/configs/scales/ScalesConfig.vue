<script setup lang="ts">
import ScalesDemo from "@/components/inspira/examples/scales/ScalesDemo.vue";

const config = ref<{
  size: number;
  orientation: "horizontal" | "vertical" | "diagonal";
}>({
  size: 8,
  orientation: "diagonal",
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ScalesDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="size"
        class="form-field"
      >
        <UInputNumber
          v-model="config.size"
          class="max-w-44"
        />
      </UFormField>
      <UFormField
        label="orientation"
        class="form-field"
      >
        <USelect
          v-model="config.orientation"
          :items="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Diagonal', value: 'diagonal' },
          ]"
          class="w-full max-w-44"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
