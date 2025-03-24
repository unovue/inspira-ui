<template>
  <div class="my-16 mt-24 flex flex-col items-center justify-center">
    <BlurReveal
      :delay="0"
      :duration="1"
    >
      <div class="text-5xl font-semibold">Check out some examples!</div>
    </BlurReveal>
  </div>
  <div
    class="flex w-full max-w-7xl flex-col flex-wrap items-center justify-center gap-4 p-4 lg:flex-row"
  >
    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
      :variant="PATTERN_BACKGROUND_VARIANT.Dot"
      class="flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-lg border px-4 py-8"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
    >
      <h3
        class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl font-bold text-transparent"
      >
        Spline
      </h3>
      <ClientOnly>
        <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
      </ClientOnly>
    </PatternBackground>

    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
      :variant="PATTERN_BACKGROUND_VARIANT.Dot"
      class="flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-lg border px-4 py-8"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
    >
      <h3
        class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl font-bold text-transparent"
      >
        3D Card Hover Effect
      </h3>
      <CardDemo2 />
    </PatternBackground>

    <PatternBackground
      :animate="true"
      :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
      :variant="PATTERN_BACKGROUND_VARIANT.Dot"
      class="flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-lg border px-4 py-8"
      :speed="PATTERN_BACKGROUND_SPEED.Slow"
    >
      <h3
        class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl font-bold text-transparent"
      >
        Radiant Text
      </h3>
      <RadiantTextDemo />
    </PatternBackground>
  </div>
</template>

<script lang="ts" setup>
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../inspira/ui/pattern-background";
</script>
