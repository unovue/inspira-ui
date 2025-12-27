<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  images: string[];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex h-96 w-full gap-2"
    :class="[props.class]"
  >
    <div
      v-for="image in images"
      :key="image"
      class="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
    >
      <img
        class="relative h-full object-cover"
        :src="image"
        :alt="image"
      />
    </div>
  </div>
</template>
