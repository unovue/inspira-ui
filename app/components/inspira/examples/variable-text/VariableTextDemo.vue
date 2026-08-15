<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  random?: boolean;
  staggerDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  radius: 200,
  falloff: "linear",
  random: false,
  staggerDuration: 0.03,
});

const containerRef = ref<HTMLElement | null>(null);
const texts = ["Overstimulated", "Underutilized", "Familiar", "Extraordinary"];
</script>

<template>
  <div
    ref="containerRef"
    class="font-variable relative flex h-full min-h-136 w-full cursor-pointer items-center justify-center overflow-hidden bg-[#ff7b00] text-white"
  >
    <div class="flex h-full w-full flex-col items-center justify-center gap-4">
      <VariableText
        v-for="text in texts"
        :key="text"
        :label="text"
        :radius="props.radius"
        :falloff="props.falloff"
        :random="props.random"
        :stagger-duration="props.staggerDuration"
        :container-ref="containerRef"
        from-font-variation-settings="'wght' 300"
        to-font-variation-settings="'wght' 700"
        class="text-4xl leading-none md:text-6xl lg:text-7xl"
      />
    </div>
  </div>
</template>
