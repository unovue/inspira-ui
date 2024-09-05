<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <component :is="componentName" />
      </template>
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
// Define props for the component
defineProps({
  componentName: {
    type: String,
    required: true,
  },
});
</script>
