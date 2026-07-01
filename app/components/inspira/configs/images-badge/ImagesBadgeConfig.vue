<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    text: "Introducing Inspira UI",
    folderSize: {
      width: range(32, 8, 96),
      height: range(24, 8, 96),
    },
    teaserImageSize: {
      width: range(20, 8, 96),
      height: range(14, 8, 96),
    },
    hoverImageSize: {
      width: range(48, 8, 128),
      height: range(32, 8, 128),
    },
    hoverTranslateY: range(-35, -120, 120),
    hoverSpread: range(20, 0, 80),
    hoverRotation: range(15, -360, 360),
  },
  { id: "images-badge", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ImagesBadgeDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
