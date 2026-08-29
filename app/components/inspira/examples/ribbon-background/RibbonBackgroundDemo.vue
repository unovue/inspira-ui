<script setup lang="ts">
interface Props {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  backgroundColor: string;
  transparent: boolean;
  enableShadows: boolean;
  angle: number;
  offsetX: number;
  offsetY: number;
  speed: number;
}

const props = defineProps<Props>();
</script>

<template>
  <section
    class="relative isolate flex min-h-[34rem] w-full flex-col overflow-hidden bg-[#050505] text-white"
  >
    <RibbonBackground
      :colors="[props.color1, props.color2, props.color3, props.color4, props.color5]"
      :background-color="props.backgroundColor"
      :transparent="props.transparent"
      :enable-shadows="props.enableShadows"
      :angle="props.angle"
      :offset-x="props.offsetX"
      :offset-y="props.offsetY"
      :speed="props.speed"
    />

    <header
      class="relative z-10 flex items-center justify-between border-b border-white/15 px-6 py-5 sm:px-10"
    >
      <span class="text-sm font-semibold tracking-[0.16em]">INSPIRA UI</span>
      <span class="text-xs text-white/55">VUE / NUXT / MOTION</span>
    </header>

    <div class="relative z-10 flex flex-1 items-end px-6 py-10 sm:px-10 sm:py-12">
      <div class="max-w-2xl">
        <h1 class="text-5xl leading-[0.94] font-semibold tracking-tight sm:text-7xl">
          <span class="block">Build interfaces</span>
          <span class="block">that feel alive.</span>
        </h1>
        <p class="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
          Beautifully animated Vue components built for expressive, production-ready interfaces.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/components"
            class="inline-flex h-12 items-center gap-3 bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-white/85"
          >
            Explore components
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/unovue/inspira-ui"
            target="_blank"
            class="inline-flex h-12 items-center gap-3 border border-white/25 px-5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
          >
            GitHub
            <UIcon
              name="i-simple-icons-github"
              class="size-4"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <footer
      class="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 px-6 py-4 text-xs text-white/55 sm:px-10"
    >
      <span>130+ animated components</span>
      <span>Open source. Built for Vue.</span>
    </footer>
  </section>
</template>
