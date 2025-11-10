<script lang="ts" setup>
const config = ref({
  width: 450,
  height: 600,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <Carousel3dDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="width"
        class="form-field"
      >
        <UInputNumber
          v-model="config.width"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="height"
        class="form-field"
      >
        <UInputNumber
          v-model="config.height"
          class="max-w-44"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
