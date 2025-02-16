<template>
  <!-- <ScriptCarbonAdsFormat
    v-if="!isDesktop || isHomePage"
    :class="
      cn(
        'w-fit gap-4 rounded-lg border border-gray-200 bg-white text-black dark:border-gray-800 dark:bg-white/5 dark:text-white',
        props.class,
      )
    "
    serve="CW7DEK37"
    placement="inspira-uicom"
    format="cover"
  /> -->
  <LayoutCarbonAds
    v-if="!isDesktop || isHomePage"
    :class="
      cn(
        'p-4 w-fit gap-4 rounded-lg border border-gray-200 bg-white text-black dark:border-gray-800 dark:bg-white/5 dark:text-white',
        props.class,
      )
    "
  >
  </LayoutCarbonAds>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps({
  class: String,
  isHomePage: {
    type: Boolean,
    default: false,
  },
});

const isDesktop = useMediaQuery("(min-width: 768px)");
</script>
