<script lang="ts" setup>
const text = shallowRef("I'll be Hokage someday, Dattebayo!");
const config = ref({
  revealDelayMs: 50,
  text: refDebounced(text, 500),
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <EncryptedTextDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="revealDelayMs"
        class="form-field"
      >
        <UInputNumber v-model="config.revealDelayMs" />
      </UFormField>
      <UFormField
        label="text"
        class="form-field"
      >
        <UInput
          v-model="text"
          class="min-w-3xs"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
