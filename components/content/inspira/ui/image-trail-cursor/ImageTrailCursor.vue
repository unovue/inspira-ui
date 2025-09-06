<template>
  <div
    ref="containerRef"
    class="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible"
  >
    <div
      v-for="(image, i) in images"
      :key="variant + i"
      class="content__img w-[190px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]"
    >
      <div
        class="content__img-inner bg-center bg-cover w-[calc(100%+20px)] h-[calc(100%+20px)] absolute top-[-10px] left-[-10px]"
        :style="`background-image: url(${image})`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { variantMap } from "./trail-variants";

export type VariantType = "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7";

interface Props {
  images?: string[];
  variant?: VariantType;
}

const { images = [], variant = "type1" } = defineProps<Props>();

const containerRef = useTemplateRef("containerRef");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let currentInstance: any = null;

// Initialize the variant instance
function initializeVariant() {
  if (!containerRef.value) return;

  if (currentInstance && typeof currentInstance.destroy === "function") {
    currentInstance.destroy();
  }

  // Get the appropriate variant class constructor
  const Variant = variantMap[variant] || variantMap.type1;

  // Create a new instance with the container element
  currentInstance = new Variant!(containerRef.value);
}

// Initialize on mount
onMounted(() => {
  initializeVariant();
});

// Re-initialize when variant prop changes
watch(
  () => variant,
  () => {
    initializeVariant();
  },
);

// Clean up on component unmount
onBeforeUnmount(() => {
  if (currentInstance && typeof currentInstance.destroy === "function") {
    currentInstance.destroy();
  }
});
</script>
