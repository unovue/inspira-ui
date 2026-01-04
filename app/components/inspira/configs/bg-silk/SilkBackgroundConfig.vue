<script lang="ts" setup>
import type { Model as ConfigModel } from "@/components/common/shader-toy-config-manager/ShaderToyConfigManager.vue";

const config = ref<ConfigModel>({
  hue: 0,
  saturation: 1,
  brightness: 1,
  speed: 1,
  mouseSensitivity: 1,
  damping: 0,
});
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <SilkBackgroundDemo v-bind="config" />
    </template>
    <template #config>
      <ShaderToyConfigManager v-model="config" />
    </template>
  </ComponentPlayground>
</template>
