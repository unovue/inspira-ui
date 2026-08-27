<script setup lang="ts">
import type { HtmlInCanvasPreset } from "../../ui/html-in-canvas";
import { computed } from "vue";
import { htmlInCanvasShaders } from "../../ui/html-in-canvas";

interface Props {
  effect?: HtmlInCanvasPreset;
  frequency?: number;
  mouseDamping?: number;
  scale?: number;
  speed?: number;
  strength?: number;
  waveSpeed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  effect: "liquid",
  frequency: 18,
  mouseDamping: 0.9,
  scale: 6,
  speed: 1,
  strength: 0.03,
  waveSpeed: 3,
});

const shaderCode = computed(() => htmlInCanvasShaders[props.effect]);

const uniforms = computed(() => ({
  uFrequency: props.frequency,
  uScale: props.scale,
  uSpeed: props.speed,
  uStrength: props.strength,
  uWaveSpeed: props.waveSpeed,
}));
</script>

<template>
  <div class="h-[36rem] w-full bg-zinc-950 p-3 sm:p-5">
    <HtmlInCanvas
      :shader-code="shaderCode"
      :uniforms="uniforms"
      :interactive="props.effect === 'liquid'"
      :mouse-damping="props.mouseDamping"
      class="border border-white/15 bg-white text-zinc-950"
    >
      <article class="grid h-full grid-rows-[auto_1fr_auto] bg-white">
        <header
          class="flex items-center justify-between border-b border-zinc-950/15 px-5 py-4 sm:px-8"
        >
          <span class="text-xs font-semibold tracking-[0.18em] uppercase">Inspira Journal</span>
          <span class="font-mono text-xs text-zinc-500">Issue 08 / 2026</span>
        </header>

        <div class="grid min-h-0 md:grid-cols-[1.15fr_0.85fr]">
          <section class="flex flex-col justify-between border-zinc-950/15 p-5 md:border-r md:p-8">
            <p class="max-w-48 text-sm leading-6 text-zinc-500">
              Switch between liquid refraction, a moving cloth field, and rising flame heat.
            </p>
            <h2 class="max-w-xl text-5xl leading-[0.88] font-semibold tracking-tight sm:text-7xl">
              <span class="block">HTML,</span>
              <span class="block">refracted.</span>
            </h2>
          </section>

          <section
            class="grid min-h-0 grid-rows-[1fr_auto] border-t border-zinc-950/15 md:border-t-0"
          >
            <div class="relative min-h-56 overflow-hidden bg-zinc-950 p-5 text-white sm:p-8">
              <div class="flex h-full flex-col justify-between border border-white/15 p-4 sm:p-6">
                <div
                  class="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase"
                >
                  <span>Surface study</span>
                  <span>01 / 01</span>
                </div>
                <div>
                  <div class="mb-3 h-px w-20 bg-white/35" />
                  <p
                    class="max-w-56 text-4xl leading-[0.9] font-semibold tracking-tight sm:text-6xl"
                  >
                    Move the surface.
                  </p>
                </div>
                <p class="font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase">
                  HTML / WebGL / live
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 border-t border-zinc-950/15 text-sm">
              <span class="border-r border-zinc-950/15 px-4 py-4">WebGL 2</span>
              <span class="px-4 py-4 text-right">iChannel0</span>
            </div>
          </section>
        </div>

        <footer
          class="flex items-center justify-between border-t border-zinc-950/15 px-5 py-4 text-xs sm:px-8"
        >
          <span>Experimental HTML rendering</span>
          <span class="font-mono text-zinc-500">{{ props.effect }}</span>
        </footer>
      </article>
    </HtmlInCanvas>
  </div>
</template>
