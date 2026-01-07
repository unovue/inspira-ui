<script setup lang="ts">
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  class: "",
});
</script>

<template>
  <div :class="cn('flex flex-1 flex-col p-8 md:p-10', props.class)">
    <slot />
  </div>
</template>
