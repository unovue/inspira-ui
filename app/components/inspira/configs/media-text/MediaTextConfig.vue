<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { select } from "../../../common/dial-kit/dialkit-controls";
import DialKitConfigPanel from "../../../common/dial-kit/DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    triggerType: select("hover", ["hover", "inView"]),
  },
  { id: "media-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <MediaTextDemo
        :key="JSON.stringify(config)"
        v-bind="config"
      />
    </template>

    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
