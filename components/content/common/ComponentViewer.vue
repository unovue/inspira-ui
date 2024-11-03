<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <component :is="componentName" />
      </template>
      <template #fallback>
        <div class="p-4">
          <Spinner class="mx-auto" />
        </div>
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Props {
  componentName?: string;
}

// Define props for the component
defineProps<Props>();
</script>
