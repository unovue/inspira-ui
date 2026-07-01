<script setup lang="ts">
import type { Props as FeyCardsProps } from "../../ui/fey-cards/FeyCards.vue";

import { useDialKit } from "dialkit/vue";
import { FeyCards } from "../../ui/fey-cards";

import { range } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const imgSrc = [
  "https://cdn.inspira-ui.com/images/1.webp",
  "https://cdn.inspira-ui.com/images/2.webp",
  "https://cdn.inspira-ui.com/images/3.webp",
  "https://cdn.inspira-ui.com/images/4.webp",
  "https://cdn.inspira-ui.com/images/5.webp",
];

const controls = useDialKit(
  "",
  {
    heroText: "Inspired by the pros. Made for you.",
    cardSpacing: range(32, 0, 120),
    shiftDistance: range(60, 0, 160),
    swapDuration: range(0.5, 0, 2, 0.05),
    entranceStagger: range(0.2, 0, 1, 0.05),
    mainImg: "https://cdn.inspira-ui.com/images/main.webp",
    idleImg: "https://cdn.inspira-ui.com/images/idle.webp",
  },
  { id: "fey-cards", persist: false },
);

const config = computed<FeyCardsProps>(() => ({
  cardSpacing: controls.value.cardSpacing,
  shiftDistance: controls.value.shiftDistance,
  swapDuration: controls.value.swapDuration,
  entranceStagger: controls.value.entranceStagger,
  mainImg: controls.value.mainImg,
  idleImg: controls.value.idleImg,
  imgSrc,
}));

const componentKey = computed(() => `${controls.value.heroText}:${JSON.stringify(config.value)}`);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <FeyCards
        :key="componentKey"
        v-bind="config"
      >
        {{ controls.heroText }}
      </FeyCards>
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
