<script lang="ts" setup>
export interface Model {
  hue: number;
  saturation: number;
  brightness: number;
  speed: number;
  mouseSensitivity: number;
  damping: number;
  noise: {
    opacity: number;
    scale: number;
  };
}

const model = defineModel<Model>();
</script>

<template>
  <template v-if="model">
    <UFormField
      label="hue"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.hue"
        :min="0"
        :max="360"
        :step="1"
      />
    </UFormField>

    <UFormField
      label="saturation"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.saturation"
        :min="0"
        :max="1"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="brightness"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.brightness"
        :min="0"
        :max="2"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="speed"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.speed"
        :min="0"
        :max="10"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="mouseSensitivity"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.mouseSensitivity"
        :min="0"
        :max="5"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="damping"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.damping"
        :min="0"
        :max="1"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="noise.opacity"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.noise.opacity"
        :min="0"
        :step="0.1"
        :max="2"
      />
    </UFormField>

    <UFormField
      label="noise.scale"
      class="form-field"
    >
      <ConfigSlider
        v-model="model.noise.scale"
        :min="0"
        :step="0.01"
        :max="1"
      />
    </UFormField>
  </template>
</template>
