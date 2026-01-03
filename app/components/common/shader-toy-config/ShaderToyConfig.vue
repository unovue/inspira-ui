<script lang="ts" setup>
export interface Model {
  hue: number;
  saturation: number;
  brightness: number;
  speed: number;
  mouseSensitivity: number;
  damping: number;
}

const model = defineModel<Model>();
</script>

<template>
  <template v-if="model">
    <UFormField
      label="hue"
      class="form-field"
    >
      <UInputNumber
        v-model="model.hue"
        class="w-full"
        :min="0"
        :max="360"
      />
    </UFormField>

    <UFormField
      label="saturation"
      class="form-field"
    >
      <UInputNumber
        v-model="model.saturation"
        class="w-full"
        :min="0"
        :max="1"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="brightness"
      class="form-field"
    >
      <UInputNumber
        v-model="model.brightness"
        class="w-full"
        :min="0"
        :max="2"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="speed"
      class="form-field"
    >
      <UInputNumber
        v-model="model.speed"
        class="w-full"
        :min="0"
        :max="10"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="mouseSensitivity"
      class="form-field"
    >
      <UInputNumber
        v-model="model.mouseSensitivity"
        class="w-full"
        :min="0"
        :max="5"
        :step="0.01"
      />
    </UFormField>

    <UFormField
      label="damping"
      class="form-field"
    >
      <UInputNumber
        v-model="model.damping"
        class="w-full"
        :min="0"
        :max="1"
        :step="0.01"
      />
    </UFormField>
  </template>
</template>
