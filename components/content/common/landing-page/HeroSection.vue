<template>
  <section
    class="relative mx-auto flex max-w-[800px] min-h-[52rem] max-sm:min-h-[28rem] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 justify-center"
  >
    <ParticlesBg
      class="fixed inset-0 top-0 right-0 left-0 bottom-0 z-[-3]"
      :quantity="250"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
    <ClientOnly>
      <Globe
        class="z-[-2] max-w-[1000px]"
        :config="{ mapBrightness: 2, width: 1000, height: 1000 }"
      />
    </ClientOnly>
    <span
      class="fixed top-0 h-screen w-full z-[-1] dark:bg-black bg-white dark:opacity-50 opacity-40"
    ></span>
    <NuxtLink
      to="/getting-started/installation"
      target=""
      class="hover:cursor-pointer inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
    >
      <SmartIcon name="lucide:rocket" :size="16" />
      <UiSeparator class="mx-2 h-4 dark:bg-gray-600" orientation="vertical" />
      <span class="underline-offset-4 hover:underline">Get Started</span>
      <Icon name="lucide:arrow-right" class="ml-1 size-4" />
    </NuxtLink>
    <h1
      class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
    >
      Build beautiful websites using Vue & Nuxt
    </h1>

    <span
      class="text-center text-lg text-gray-600 dark:text-gray-200 sm:text-xl mt-4"
    >
      Open Source components to build stunning animated interfaces effortlessly
      using Vue & Nuxt.
    </span>

    <div
      class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10 mt-4"
    >
      <NuxtLink to="/components/all">
        <UiButton> All Components </UiButton>
      </NuxtLink>
      <NuxtLink to="https://github.com/unovue/inspira-ui" target="_blank">
        <UiButton variant="outline">
          <SmartIcon name="lucide:github" class="mr-1" />
          Github
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");
</script>
