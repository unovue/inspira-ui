<script setup lang="ts">
import { withBase } from "ufo";

const runtimeConfig = useRuntimeConfig();
const imageSrc = computed(() => withBase("/og-image.png", runtimeConfig.app.baseURL || "/"));
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <ParticleImage
      :image-src="imageSrc"
      :responsive-width="true"
    />
  </div>
</template>
