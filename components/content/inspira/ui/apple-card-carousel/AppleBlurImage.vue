<template>
  <img
    :class="
      cn(
        'transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        props.class,
        fill ? 'h-full w-full' : '',
      )
    "
    :src="src"
    :width="width"
    :height="height"
    loading="lazy"
    decoding="async"
    :alt="alt"
    @load="handleLoad"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  height?: number | string;
  width?: number | string;
  src: string;
  class?: string;
  alt?: string;
  fill?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  height: undefined,
  width: undefined,
  class: "",
  alt: "Background of a beautiful view",
  fill: false,
});

const isLoading = ref(true);

function handleLoad() {
  isLoading.value = false;
}
</script>
