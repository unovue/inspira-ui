<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>

<script setup lang="ts">
import { ToastProvider, type ToastProviderProps } from "reka-ui";

const props = defineProps<ToastProviderProps>();
</script>
