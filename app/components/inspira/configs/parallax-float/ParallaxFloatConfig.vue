<script setup lang="ts">
import { useDialKit } from "dialkit/vue";
import { range } from "../../../common/dial-kit/dialkit-controls.js";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    sensitivity: range(-1, -5, 5, 0.1),
    easingFactor: range(0.05, 0.01, 0.2, 0.01),
  },
  { id: "parallax-float", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ParallaxFloatDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
