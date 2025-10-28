<script lang="ts" setup>
const enabled = ref(false);
</script>

<template>
  <div class="relative flex h-60 w-full flex-col items-center justify-center gap-4">
    <div class="flex flex-row items-center justify-center gap-4">
      <span>Enable Effect</span>
      <Switch v-model="enabled" />
    </div>
    <span
      v-if="enabled"
      class="text-4xl font-semibold opacity-50"
    >
      Hover anywhere
    </span>
    <FluidCursor v-if="enabled" />
  </div>
</template>
