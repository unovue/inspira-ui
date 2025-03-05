<template>
  <div
    :class="
      cn(
        'flex shrink-0 scale-105 flex-wrap items-center justify-center gap-px bg-gray-100 dark:bg-neutral-900',
        $props.class,
      )
    "
  >
    <template v-for="row in ROWS">
      <template
        v-for="col in COLUMNS"
        :key="`${row}-${col}`"
      >
        <div
          :class="
            cn(
              'w-10 h-10 flex flex-shrink-0 rounded-[2px]',
              ((row - 1) * COLUMNS + (col - 1)) % 2 === 0
                ? 'bg-gray-50 dark:bg-neutral-950'
                : 'bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]',
            )
          "
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface FileUploadGridProps {
  class?: HTMLAttributes["class"];
}

defineProps<FileUploadGridProps>();

const ROWS = 11;
const COLUMNS = 41;
</script>
