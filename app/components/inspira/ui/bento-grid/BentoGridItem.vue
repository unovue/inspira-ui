<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
    :class="[props.class]"
  >
    <slot name="header" />
    <div class="transition duration-200 group-hover/bento:translate-x-2">
      <slot name="icon" />
      <div class="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        <slot name="title" />
      </div>
      <div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>
