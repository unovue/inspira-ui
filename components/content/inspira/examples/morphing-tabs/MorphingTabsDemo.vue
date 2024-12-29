<template>
  <MorphingTabs
    :tabs="tabs"
    :active-tab="activeTab"
    @update:active-tab="activeTab = $event"
  />
</template>

<script lang="ts" setup>
const tabs = ["Home", "Apps", "About", "My"];
const activeTab = ref(tabs[0]);
</script>
