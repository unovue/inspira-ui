<template>
  <div class="relative h-60 w-full flex flex-col items-center justify-center gap-4">
    <div class="flex flex-row items-center justify-center gap-4">
      <span>Enable Effect</span>
      <Switch v-model="enabled" />
    </div>
    <span
      v-if="enabled"
      class="opacity-50 text-4xl font-semibold"
    >
      Hover anywhere
    </span>
    <FluidCursor v-if="enabled" />
  </div>
</template>

<script lang="ts" setup>
const enabled = ref(false);
</script>
