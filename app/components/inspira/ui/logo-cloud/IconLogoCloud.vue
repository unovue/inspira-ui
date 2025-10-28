<script setup lang="ts">
import type { AnimateLogoCloudProps } from "./index";
import { cn } from "@/lib/utils";

const props = defineProps<AnimateLogoCloudProps>();
</script>

<template>
  <div class="w-full py-12">
    <div class="flex w-full flex-col items-center justify-center gap-6 px-4 md:px-8">
      <div
        v-if="props.title"
        class="text-muted-foreground font-medium"
      >
        {{ props.title }}
      </div>
      <div :class="cn('grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8', props.class)">
        <img
          v-for="(logo, key) in props.logos"
          :key="key"
          :src="logo.path"
          :alt="logo.name"
          class="h-7 w-12 px-2 brightness-0 dark:invert"
        >
      </div>
    </div>
  </div>
</template>
