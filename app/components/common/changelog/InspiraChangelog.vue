<script setup lang="ts">
const versions = ref([
  {
    title: "Bug Fixes: Dec 23, 2025",
    description: "Performance updates in Github Globe and Falling Stars Background.",
    date: "2025-04-27",
    ui: {
      container: "max-w-md",
    },
  },
]);
</script>

<template>
  <UChangelogVersions :versions="versions" />
</template>
