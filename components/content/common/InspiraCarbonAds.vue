<template>
  <ScriptCarbonAdsFormat
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
  />
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: String,
  isHomePage: {
    type: Boolean,
    default: false,
  },
});

const isDesktop = useMediaQuery("(min-width: 768px)");
</script>

<style>
@reference "../../../assets/css/tailwind.css";

#carbon-responsive .carbon-poweredby {
  @apply text-sm dark:text-zinc-200 dark:hover:text-zinc-50 text-zinc-800 hover:text-zinc-950;
}

#carbonads {
  @apply p-4;
}
</style>
