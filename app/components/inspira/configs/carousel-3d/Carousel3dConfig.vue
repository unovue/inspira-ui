<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    width: range(450, 240, 900, 10),
    height: range(600, 320, 1000, 10),
  },
  { id: "carousel-3d", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <Carousel3dDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
