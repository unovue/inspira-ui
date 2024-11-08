<template>
  <ScriptCarbonAds
    :class="
      cn(
        'w-sm gap-4 rounded-lg border border-gray-200 bg-white text-black dark:border-gray-800 dark:bg-white/5 dark:text-white',
        props.class,
      )
    "
    serve="CW7DEK37"
    placement="inspira-uicom"
  />
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps({
  class: String,
});
</script>

<style>
.carbon-poweredby {
  @apply text-sm;
}

#carbonads {
  @apply p-4;
}
</style>
