<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    speed: range(70, 20, 200, 5),
    initialDelay: range(0, 0, 2000, 50),
    waitTime: range(1500, 500, 4000, 100),
    deleteSpeed: range(40, 10, 150, 5),
    loop: true,
    showCursor: true,
    hideCursorOnType: false,
  },
  { id: "typewriter-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <TypewriterTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
