<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    width: range(350, 200, 600, 10),
    height: range(250, 150, 450, 10),
    perspective: range(1000, 300, 1800, 50),
    direction: select("right", ["top", "bottom", "left", "right"]),
    dragSensitivity: range(0.5, 0.1, 1.5, 0.05),
    autoPlay: false,
    autoPlayInterval: range(3000, 1000, 8000, 250),
    enableDrag: true,
    debug: false,
  },
  { id: "cube-carousel", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CubeCarouselDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
