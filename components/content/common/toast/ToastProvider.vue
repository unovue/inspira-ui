<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>

<script setup lang="ts">
import { ToastProvider, type ToastProviderProps } from "radix-vue";

const props = defineProps<ToastProviderProps>();
</script>
