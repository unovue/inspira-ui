<script setup lang="ts">
const versions = ref([
  {
    title: "Released v3: Dec 27, 2025",
    description: "Migrated docs to Docus.dev and improved docs user experience.",
    date: "2025-12-27",
    ui: {
      container: "max-w-md",
    },
  },
  {
    title: "Bug Fixes: Dec 23, 2025",
    description: "Performance updates in Github Globe and Falling Stars Background.",
    date: "2025-12-23",
    ui: {
      container: "max-w-md",
    },
  },
]);
</script>

<template>
  <UChangelogVersions :versions="versions" />
</template>
