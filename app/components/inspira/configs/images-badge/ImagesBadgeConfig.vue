<script lang="ts" setup>
const config = ref({
  text: "Introducing Inspira UI",
  folderSize: { width: 32, height: 24 },
  teaserImageSize: { width: 20, height: 14 },
  hoverImageSize: { width: 48, height: 32 },
  hoverTranslateY: -35,
  hoverSpread: 20,
  hoverRotation: 15,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ImagesBadgeDemo v-bind="config" />
    </template>
    <template #config>
      <UFormField
        label="text"
        class="form-field"
      >
        <UInput
          v-model="config.text"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="folderSize.width"
        class="form-field"
      >
        <UInputNumber
          v-model="config.folderSize.width"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="folderSize.height"
        class="form-field"
      >
        <UInputNumber
          v-model="config.folderSize.height"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="teaserImageSize.width"
        class="form-field"
      >
        <UInputNumber
          v-model="config.teaserImageSize.width"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="teaserImageSize.height"
        class="form-field"
      >
        <UInputNumber
          v-model="config.teaserImageSize.height"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="hoverImageSize.width"
        class="form-field"
      >
        <UInputNumber
          v-model="config.hoverImageSize.width"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="hoverImageSize.height"
        class="form-field"
      >
        <UInputNumber
          v-model="config.hoverImageSize.height"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="hoverTranslateY"
        class="form-field"
      >
        <UInputNumber
          v-model="config.hoverTranslateY"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="hoverSpread"
        class="form-field"
      >
        <UInputNumber
          v-model="config.hoverSpread"
          class="max-w-44"
        />
      </UFormField>

      <UFormField
        label="hoverRotation"
        class="form-field"
      >
        <UInputNumber
          v-model="config.hoverRotation"
          :min="-360"
          :max="360"
          class="max-w-44"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
