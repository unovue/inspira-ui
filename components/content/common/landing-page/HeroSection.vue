<template>
  <section
    class="relative mx-auto flex min-h-[52rem] max-w-[800px] flex-col items-center justify-center gap-2 py-8 max-sm:min-h-[28rem] lg:py-24 lg:pb-20 md:py-12 md:pb-8"
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
    <NuxtLink
      to="/getting-started/installation"
      target=""
      class="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium hover:cursor-pointer"
    >
      <SmartIcon
        name="lucide:rocket"
        :size="16"
      />
      <UiSeparator
        class="mx-2 h-4 dark:bg-gray-600"
        orientation="vertical"
      />
      <span class="underline-offset-4 hover:underline">Get Started</span>
      <Icon
        name="lucide:arrow-right"
        class="ml-1 size-4"
      />
    </NuxtLink>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-6xl"
    >
      Build
      <TextHighlight
        class="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1"
        text-end-color="hsl(var(--accent))"
      >
        <FlipWords
          :words="['beautiful', 'stunning']"
          :duration="3000"
        />
      </TextHighlight>
      websites using Vue & Nuxt
    </h1>

    <span class="mt-4 text-center text-lg text-gray-600 sm:text-xl dark:text-gray-200">
      Open Source components to build stunning animated interfaces effortlessly using Vue & Nuxt.
    </span>

    <div class="mt-4 flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
      <NuxtLink to="/components">
        <UiButton> All Components </UiButton>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/unovue/inspira-ui"
        target="_blank"
      >
        <UiButton variant="outline">
          <SmartIcon
            name="lucide:github"
            class="mr-1"
          />
          Github
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
</script>
