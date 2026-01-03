<script setup lang="ts">
const versions = ref([
  {
    title: "New Components added",
    description: `Added <DitherShader />, <ThunderstormBackground /> & <SingularityBackground /> components.`,
    date: "2026-01-04",
    ui: {
      container: "max-w-md",
    },
  },
  {
    title: "Components updated",
    description: `Added Component playground to <SilkBackground /> component.`,
    date: "2026-01-04",
    ui: {
      container: "max-w-md",
    },
  },
  {
    title: "Component Update: Pattern Background",
    description: "Added component playground & fixed issues with pattern not visible",
    date: "2026-01-03",
    ui: {
      container: "max-w-md",
    },
  },
  {
    title: "Bug Fixes: Dec 30, 2025",
    description:
      "Fixed issues with component: World Map, Particle Image, Animated Circular Progress Bar & Glare Card.",
    date: "2025-12-30",
    ui: {
      container: "max-w-md",
    },
  },
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
