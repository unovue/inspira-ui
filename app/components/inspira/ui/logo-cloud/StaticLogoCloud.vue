<script setup lang="ts">
import type { AnimateLogoCloudProps } from "./index";

const props = defineProps<AnimateLogoCloudProps>();
</script>

<template>
  <div class="w-full py-12">
    <div class="flex w-full flex-col items-center justify-center gap-4 px-4 md:px-8">
      <div
        v-if="props.title"
        class="text-muted-foreground font-medium uppercase"
      >
        {{ props.title }}
      </div>
      <div
        class="grid grid-cols-3 gap-x-4 md:grid-cols-5 lg:grid-cols-8"
        :class="[props.class]"
      >
        <img
          v-for="(logo, key) in props.logos"
          :key="key"
          :src="logo.path"
          :alt="logo.name"
          class="h-10 w-28 px-2 brightness-0 dark:invert"
        />
      </div>
    </div>
  </div>
</template>
