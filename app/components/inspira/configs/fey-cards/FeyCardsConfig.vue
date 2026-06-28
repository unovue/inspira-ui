<script lang="ts" setup>
import type { Props as FeyCardsProps } from "../../ui/fey-cards/FeyCards.vue";
import { FeyCards } from "../../ui/fey-cards";

const config = ref<FeyCardsProps>({
  cardSpacing: 32,
  shiftDistance: 60,
  swapDuration: 0.5,
  entranceStagger: 0.2,
  imgSrc: [
    "https://cdn.inspira-ui.com/images/1.webp",
    "https://cdn.inspira-ui.com/images/2.webp",
    "https://cdn.inspira-ui.com/images/3.webp",
    "https://cdn.inspira-ui.com/images/4.webp",
    "https://cdn.inspira-ui.com/images/5.webp",
  ],
  mainImg: "https://cdn.inspira-ui.com/images/main.webp",
  idleImg: "https://cdn.inspira-ui.com/images/idle.webp",
});

const heroText = ref("Inspired by the pros. Made for you.");

const componentKey = computed(() => `${heroText.value}:${JSON.stringify(config.value)}`);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <FeyCards
        :key="componentKey"
        v-bind="config"
      >
        {{ heroText }}
      </FeyCards>
    </template>

    <template #config>
      <UFormField
        label="Hero Text"
        class="form-field"
      >
        <UInput
          v-model="heroText"
          class="w-full max-w-64"
        />
      </UFormField>

      <UFormField
        label="cardSpacing"
        class="form-field"
      >
        <UInputNumber
          v-model="config.cardSpacing"
          class="w-full max-w-32"
          :min="0"
        />
      </UFormField>

      <UFormField
        label="shiftDistance"
        class="form-field"
      >
        <UInputNumber
          v-model="config.shiftDistance"
          class="w-full max-w-32"
          :min="0"
        />
      </UFormField>

      <UFormField
        label="swapDuration"
        class="form-field"
      >
        <UInputNumber
          v-model="config.swapDuration"
          class="w-full max-w-32"
          :min="0"
          :step="0.05"
        />
      </UFormField>

      <UFormField
        label="entranceStagger"
        class="form-field"
      >
        <UInputNumber
          v-model="config.entranceStagger"
          class="w-full max-w-32"
          :min="0"
          :step="0.05"
        />
      </UFormField>

      <UFormField
        label="mainImg"
        class="form-field"
      >
        <UInput
          v-model="config.mainImg"
          class="w-full max-w-64"
        />
      </UFormField>

      <UFormField
        label="idleImg"
        class="form-field"
      >
        <UInput
          v-model="config.idleImg"
          class="w-full max-w-64"
        />
      </UFormField>
    </template>
  </ComponentPlayground>
</template>
