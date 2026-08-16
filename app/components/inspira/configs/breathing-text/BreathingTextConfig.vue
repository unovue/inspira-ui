<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range, select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    fromFontVariationSettings: "'wght' 100, 'slnt' 0",
    toFontVariationSettings: "'wght' 800, 'slnt' -10",
    duration: range(1.5, 0.2, 4, 0.1),
    staggerDuration: range(0.08, 0, 0.3, 0.01),
    staggerFrom: select("first", ["first", "last", "center"]),
    repeatDelay: range(0.1, 0, 1, 0.05),
  },
  { id: "breathing-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <BreathingTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
