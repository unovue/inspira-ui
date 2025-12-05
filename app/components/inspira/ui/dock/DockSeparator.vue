<script setup lang="ts">
import { ORIENTATION_INJECTION_KEY } from "./injectionKeys";

const orientation = inject(ORIENTATION_INJECTION_KEY, "vertical");
</script>

<template>
  <div
    class="bg-secondary relative block"
    :class="[orientation === 'vertical' ? 'h-0.5 w-4/5' : 'h-4/5 w-0.5']"
  />
</template>
