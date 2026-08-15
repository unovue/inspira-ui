<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    height?: "sm" | "md" | "lg";
    renderOnDemand?: boolean;
  }>(),
  {
    title: "Inspira UI",
    subtitle: "Build spline animations with style.",
    height: "md",
    renderOnDemand: true,
  },
);

const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const heightClass = computed(() => ({
  "h-80": props.height === "sm",
  "h-96": props.height === "md",
  "h-[36rem]": props.height === "lg",
}));
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-lg bg-black/96"
    :class="heightClass"
  >
    <div
      class="font-heading absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center text-white"
    >
      <span class="text-4xl font-semibold">{{ props.title }}</span>
      <span class="font-sans font-light">{{ props.subtitle }}</span>
    </div>
    <div class="flex">
      <Spline
        :scene="sceneUrl"
        :render-on-demand="props.renderOnDemand"
        class="mt-24 size-full"
      />
    </div>
  </div>
</template>
