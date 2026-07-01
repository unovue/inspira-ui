<script setup lang="ts">
import { useDialKit } from "dialkit/vue";

import { range } from "../dialkit-controls";
import DialKitConfigPanel from "../DialKitConfigPanel.vue";

const config = useDialKit(
  "",
  {
    revealDelayMs: range(50, 0, 500, 10),
    text: "I'll be Hokage someday, Dattebayo!",
  },
  { id: "encrypted-text", persist: false },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <EncryptedTextDemo v-bind="config" />
    </template>
    <template #config>
      <DialKitConfigPanel />
    </template>
  </ComponentPlayground>
</template>
