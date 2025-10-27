<script lang="ts" setup>
const config = ref({
  title: {
    translateX: 0,
    translateY: 0,
    translateZ: 50,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
  description: {
    translateX: 0,
    translateY: 0,
    translateZ: 60,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
  image: {
    translateX: 0,
    translateY: 0,
    translateZ: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
  btnLeft: {
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
  btnRight: {
    translateX: 0,
    translateY: 0,
    translateZ: 20,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  },
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CardDemo v-bind="config" />
    </template>
    <template #config>
      <UPageCard
        title="Title"
        class="bg-default/15"
      >
        <UFormField
          label="translateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.translateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.translateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.translateZ"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.rotateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.rotateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.title.rotateZ"
            class="max-w-40"
          />
        </UFormField>
      </UPageCard>

      <UPageCard
        title="Description"
        class="bg-default/15"
      >
        <UFormField
          label="translateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.translateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.translateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.translateZ"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.rotateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.rotateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.description.rotateZ"
            class="max-w-40"
          />
        </UFormField>
      </UPageCard>

      <UPageCard
        title="Image"
        class="bg-default/15"
      >
        <UFormField
          label="translateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.translateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.translateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.translateZ"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.rotateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.rotateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.image.rotateZ"
            class="max-w-40"
          />
        </UFormField>
      </UPageCard>

      <UPageCard
        title="Visit Button"
        class="bg-default/15"
      >
        <UFormField
          label="translateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.translateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.translateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.translateZ"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.rotateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.rotateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnLeft.rotateZ"
            class="max-w-40"
          />
        </UFormField>
      </UPageCard>

      <UPageCard
        title="Get Started Button"
        class="bg-default/15"
      >
        <UFormField
          label="translateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.translateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.translateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="translateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.translateZ"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateX"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.rotateX"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateY"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.rotateY"
            class="max-w-40"
          />
        </UFormField>

        <UFormField
          label="rotateZ"
          class="form-field"
        >
          <UInputNumber
            v-model="config.btnRight.rotateZ"
            class="max-w-40"
          />
        </UFormField>
      </UPageCard>
    </template>
  </ComponentPlayground>
</template>
