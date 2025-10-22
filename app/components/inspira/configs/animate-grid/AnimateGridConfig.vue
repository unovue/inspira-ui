<script lang="ts" setup>
const config = ref({
  textGlowStartColor: "",
  perspective: 600,
  textGlowEndColor: "",
  rotateX: -1,
  rotateY: -15,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <AnimateGridDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="textGlowStartColor"
        class="form-field"
      >
        <ColorChooser v-model="config.textGlowStartColor" />
      </UFormField>

      <UFormField
        label="textGlowEndColor"
        class="form-field"
      >
        <ColorChooser v-model="config.textGlowEndColor" />
      </UFormField>

      <UFormField
        label="perspective"
        class="form-field"
      >
        <UInputNumber v-model="config.perspective" />
      </UFormField>

      <UFormField
        label="rotateX"
        class="form-field"
      >
        <UInputNumber
          v-model="config.rotateX"
          :min="-360"
          :max="360"
        />
      </UFormField>

      <UFormField
        label="rotateY"
        class="form-field"
      >
        <UInputNumber
          v-model="config.rotateY"
          :min="-360"
          :max="360"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
