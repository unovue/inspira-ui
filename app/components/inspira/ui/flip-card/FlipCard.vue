<script setup lang="ts">
import { computed } from "vue";

interface FlipCardProps {
  rotate?: "x" | "y";
  class?: string;
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  rotate: "y",
});
const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>

<template>
  <div
    class="group h-72 w-56 [perspective:1000px]"
    :class="[props.class]"
  >
    <div
      class="relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]"
      :class="[rotation[0]]"
    >
      <!-- Front -->
      <div
        class="absolute size-full overflow-hidden rounded-2xl border [backface-visibility:hidden]"
      >
        <slot />
      </div>

      <!-- Back -->
      <div
        class="absolute h-full w-full overflow-hidden rounded-2xl border bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]"
        :class="[rotation[1]]"
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>
