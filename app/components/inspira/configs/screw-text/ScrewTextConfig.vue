<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    rotateDirection: select("top", ["top", "right", "bottom", "left"]),
    staggerFrom: select("first", ["first", "last", "center", "random"]),
    staggerDuration: range(0.03, 0, 0.12, 0.005),
    stiffness: range(300, 50, 400, 10),
    damping: range(30, 5, 50, 1),
  },
  { id: "screw-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <ScrewTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
