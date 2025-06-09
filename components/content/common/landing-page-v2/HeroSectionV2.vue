<template>
  <section
    class="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 py-8 max-sm:min-h-[48rem] lg:py-24 lg:pb-20 md:py-12 md:pb-8"
  >
    <ParticlesBg
      class="fixed inset-0 z-[-3]"
      :quantity="250"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />

    <span
      class="fixed top-0 z-[-1] h-screen w-full bg-white opacity-40 dark:bg-black dark:opacity-50"
    ></span>

    <Motion
      as-child
      :initial="{ scale: 0 }"
      :animate="{ rotate: 360, scale: 1 }"
      :transition="{
        duration: 0.5,
        type: 'spring',
        damping: 5,
        stiffness: 50,
        restDelta: 0.1,
        delay: 0.5,
      }"
    >
      <LiquidLogo
        class="size-32 max-md:size-24 md:-mt-24"
        image-url="/logo.svg"
        :show-processing="false"
      />
    </Motion>
    <BlurReveal
      :delay="0.2"
      :duration="0.75"
      class="max-md:mt-4 md:p-8"
    >
      <h1
        class="text-center text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-6xl"
      >
        Inspira UI
      </h1>
    </BlurReveal>

    <span class="text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
      Open source components to build
      <TextHighlight
        class="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1"
        text-end-color="hsl(var(--accent))"
      >
        <FlipWords
          :words="['beautiful', 'stunning']"
          :duration="2000"
        />
      </TextHighlight>
      websites using Vue & Nuxt
    </span>

    <div class="mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <NuxtLink to="/components">
        <UiButton variant="secondary"> All Components </UiButton>
      </NuxtLink>
      <NuxtLink
        to="https://pro.inspira-ui.com"
        target="_blank"
      >
        <UiButton>
          Inspira UI Pro
          <Icon
            name="ix:arrow-diagonal-top-right"
            size="20"
          />
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
const globeConfig = {
  pointSize: 1,
  globeColor: "#FFF",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.2,
  emissive: "#FFF",
  emissiveIntensity: 0.9,
  shininess: 0.9,
  polygonColor: "rgba(0,0,0,1)",
  ambientLight: "#FFF",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 1,
  rings: 1,
  maxRings: 10,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
</script>
