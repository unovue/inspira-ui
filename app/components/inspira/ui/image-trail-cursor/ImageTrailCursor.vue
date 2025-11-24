<script lang="ts" setup>
import { variantMap } from "./trail-variants";

export type VariantType = "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7";

interface Props {
  images?: string[];
  variant?: VariantType;
}

const { images = [], variant = "type1" } = defineProps<Props>();

const containerRef = useTemplateRef("containerRef");

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

<template>
  <div
    ref="containerRef"
    class="relative z-[100] h-full w-full overflow-visible rounded-lg bg-transparent"
  >
    <div
      v-for="(image, i) in images"
      :key="variant + i"
      class="content__img absolute top-0 left-0 aspect-[1.1] w-[190px] overflow-hidden rounded-[15px] opacity-0 [will-change:transform,filter]"
    >
      <div
        class="content__img-inner absolute top-[-10px] left-[-10px] h-[calc(100%+20px)] w-[calc(100%+20px)] bg-cover bg-center"
        :style="`background-image: url(${image})`"
      />
    </div>
  </div>
</template>
