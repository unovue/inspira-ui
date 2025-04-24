<template>
  <div class="flex items-center justify-center text-xl">
    <span class="hidden md:block">Move your mouse around</span>
    <span class="block md:hidden">Tap anywhere to see the cursor</span>
    <ClientOnly>
      <SmoothCursor />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped></style>
