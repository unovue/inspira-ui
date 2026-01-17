<script lang="ts" setup>
interface Props {
  direction: "top" | "right" | "left" | "bottom";
  blurLayers: number;
  blurIntensity: number;
}

const config = ref<Props>({ direction: "bottom", blurLayers: 8, blurIntensity: 6 });
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ProgressiveBlurDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="direction"
        class="form-field"
      >
        <USelect
          v-model="config.direction"
          :items="['top', 'right', 'left', 'bottom']"
        />
      </UFormField>
      <UFormField
        label="blurLayers"
        class="form-field"
      >
        <ConfigSlider
          v-model="config.blurLayers"
          :min="0"
          :max="50"
        />
      </UFormField>
      <UFormField
        label="blurIntensity"
        class="form-field"
      >
        <ConfigSlider
          v-model="config.blurIntensity"
          :min="0"
          :step="0.01"
          :max="10"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
