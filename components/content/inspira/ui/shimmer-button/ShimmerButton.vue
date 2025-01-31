<template>
  <button
    :class="
      cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black',
        'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
        $props.class,
      )
    "
    :style="{
      '--spread': '90deg',
      '--shimmer-color': shimmerColor,
      '--radius': borderRadius,
      '--speed': shimmerDuration,
      '--cut': shimmerSize,
      '--bg': background,
    }"
  >
    <div :class="cn('-z-30 blur-[2px]', 'absolute inset-0 overflow-visible [container-type:size]')">
      <div
        class="animate-shimmer-btn-shimmer-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]"
      >
        <div
          class="animate-shimmer-btn-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
        />
      </div>
    </div>
    <slot />

    <div
      :class="
        cn(
          'insert-0 absolute size-full',

          'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',

          // transition
          'transform-gpu transition-all duration-300 ease-in-out',

          // on hover
          'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',

          // on click
          'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]',
        )
      "
    />

    <div
      class="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
    />
  </button>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  class?: string;
};

withDefaults(defineProps<ShimmerButtonProps>(), {
  shimmerColor: "#ffffff",
  shimmerSize: "0.05em",
  shimmerDuration: "3s",
  borderRadius: "100px",
  background: "rgba(0, 0, 0, 1)",
});
</script>

<style scoped>
@keyframes shimmer-btn-shimmer-slide {
  to {
    transform: translate(calc(100cqw - 100%), 0);
  }
}

@keyframes shimmer-btn-spin-around {
  0% {
    transform: translateZ(0) rotate(0);
  }
  15%,
  35% {
    transform: translateZ(0) rotate(90deg);
  }
  65%,
  85% {
    transform: translateZ(0) rotate(270deg);
  }
  100% {
    transform: translateZ(0) rotate(360deg);
  }
}

.animate-shimmer-btn-shimmer-slide {
  animation: shimmer-btn-shimmer-slide var(--speed) ease-in-out infinite alternate;
}

.animate-shimmer-btn-spin-around {
  animation: shimmer-btn-spin-around calc(var(--speed) * 2) infinite linear;
}
</style>
