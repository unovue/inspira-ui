<script lang="ts" setup>
const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <CarbonAdsScript
    class="w-fit gap-4 rounded-lg border border-gray-200 bg-white text-black dark:border-gray-800 dark:bg-white/5 dark:text-white"
    :class="[props.class]"
    serve="CW7DEK37"
    placement="inspira-uicom"
    format="cover"
  />
</template>

<style>
@reference "../../../assets/css/main.css";

#carbon-responsive .carbon-poweredby {
  @apply text-sm text-zinc-800 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50;
}

#carbonads {
  @apply p-4;
}
</style>
