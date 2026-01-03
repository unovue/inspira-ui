<script lang="ts" setup>
import type { DemoProps } from "../../examples/dither-shader/DitherShaderDemo.vue";
import DitherShaderDemo from "../../examples/dither-shader/DitherShaderDemo.vue";

const config = ref<Required<DemoProps>>({
  gridSize: 4,
  ditherMode: "bayer",
  colorMode: "original",
  invert: false,
  pixelRatio: 1,
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
  customPalette: ["#000000", "#ffffff"],
  brightness: 0,
  contrast: 1,
  backgroundColor: "#00000000",
  objectFit: "cover",
  threshold: 0.5,
  animated: false,
  animationSpeed: 0.02,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <DitherShaderDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="gridSize"
        class="form-field"
      >
        <UInputNumber
          v-model="config.gridSize"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="ditherMode"
        class="form-field"
      >
        <USelect
          v-model="config.ditherMode"
          class="w-full max-w-32"
          :items="['bayer', 'halftone', 'noise', 'crosshatch']"
        />
      </UFormField>

      <UFormField
        label="colorMode"
        class="form-field"
      >
        <USelect
          v-model="config.colorMode"
          class="w-full max-w-32"
          :items="['original', 'grayscale', 'duotone']"
        />
      </UFormField>

      <UFormField
        label="pixelRatio"
        class="form-field"
      >
        <UInputNumber
          v-model="config.pixelRatio"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="primaryColor"
        class="form-field"
      >
        <ColorChooser
          v-model="config.primaryColor"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="secondaryColor"
        class="form-field"
      >
        <ColorChooser
          v-model="config.secondaryColor"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="backgroundColor"
        class="form-field"
      >
        <ColorChooser
          v-model="config.backgroundColor"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="brightness"
        class="form-field"
      >
        <UInputNumber
          v-model="config.brightness"
          class="w-full max-w-32"
          :min="-1"
          :max="1"
        />
      </UFormField>

      <UFormField
        label="contrast"
        class="form-field"
      >
        <UInputNumber
          v-model="config.contrast"
          class="w-full max-w-32"
          :min="0"
          :max="2"
        />
      </UFormField>

      <UFormField
        label="objectFit"
        class="form-field"
      >
        <USelect
          v-model="config.objectFit"
          class="w-full max-w-32"
          :items="['cover', 'contain', 'fill', 'none']"
        />
      </UFormField>

      <UFormField
        label="threshold"
        class="form-field"
      >
        <UInputNumber
          v-model="config.threshold"
          class="w-full max-w-32"
          :min="0"
          :max="1"
        />
      </UFormField>

      <UFormField
        label="invert"
        class="form-field"
      >
        <USwitch
          v-model="config.invert"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="animated"
        class="form-field"
      >
        <USwitch
          v-model="config.animated"
          class="w-full max-w-32"
        />
      </UFormField>

      <UFormField
        label="animationSpeed"
        class="form-field"
      >
        <UInputNumber
          v-model="config.animationSpeed"
          class="w-full max-w-32"
          :min="0"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
