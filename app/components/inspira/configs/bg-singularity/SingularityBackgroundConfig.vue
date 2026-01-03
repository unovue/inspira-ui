<script lang="ts" setup>
import type { Model as ConfigModel } from "@/components/common/shader-toy-config/ShaderToyConfig.vue";
import SingularityBackgroundDemo from "@/components/inspira/examples/bg-singularity/SingularityBackgroundDemo.vue";

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
      <SingularityBackgroundDemo v-bind="config" />
    </template>
    <template #config>
      <ShaderToyConfig v-model="config" />
    </template>
  </ComponentPlayground>
</template>
