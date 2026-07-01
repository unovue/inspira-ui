<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

function transformControls(translateZ: number) {
  return {
    translateX: range(0, -120, 120),
    translateY: range(0, -120, 120),
    translateZ: range(translateZ, 0, 180),
    rotateX: range(0, -180, 180),
    rotateY: range(0, -180, 180),
    rotateZ: range(0, -180, 180),
  };
}

const config = useDialKit(
  "",
  {
    title: transformControls(50),
    description: transformControls(60),
    image: transformControls(100),
    btnLeft: transformControls(20),
    btnRight: transformControls(20),
  },
  {
    id: "card-3d",
    persist: false,
  },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CardDemo v-bind="config" />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
