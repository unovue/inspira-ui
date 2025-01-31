<template>
  <div class="flex items-center justify-center p-4">
    <AnimateGrid :cards>
      <template #logo="{ logo }">
        <img
          class="logo mx-auto h-10 w-auto"
          :src="logo"
        />
      </template>
    </AnimateGrid>
  </div>
</template>
<script lang="ts" setup>
import cloudflare from "./cloudflare.svg";

const cards = Array.from({ length: 16 }, () => ({
  logo: cloudflare,
}));
</script>
