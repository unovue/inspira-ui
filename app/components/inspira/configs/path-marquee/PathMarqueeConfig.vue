<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    baseVelocity: range(8, 1, 20, 0.5),
    slowdownOnHover: true,
    draggable: true,
    repeat: range(2, 1, 4),
    dragSensitivity: range(0.1, 0.02, 0.5, 0.01),
  },
  { id: "path-marquee", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <PathMarqueeDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
