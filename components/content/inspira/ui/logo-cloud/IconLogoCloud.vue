<template>
  <div class="w-full py-12">
    <div class="flex w-full flex-col items-center justify-center gap-6 px-4 md:px-8">
      <div
        v-if="props.title"
        class="font-medium text-muted-foreground"
      >
        {{ props.title }}
      </div>
      <div :class="cn('grid grid-cols-3 lg:grid-cols-8 md:grid-cols-8', props.class)">
        <img
          v-for="(logo, key) in props.logos"
          :key="key"
          :src="logo.path"
          :alt="logo.name"
          class="h-7 w-12 px-2 brightness-0 dark:invert"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { AnimateLogoCloudProps } from "./index";

const props = defineProps<AnimateLogoCloudProps>();
</script>
