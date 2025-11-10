<script lang="ts" setup>
const { locale } = useDocusI18n();

const componentPath = computed(() => `/${locale.value}/components`);
</script>

<template>
  <div
    class="relative flex h-full min-h-[75vh] w-full flex-col items-center justify-center gap-4 p-8 max-lg:p-6"
  >
    <div class="flex max-w-4xl flex-col items-center justify-center gap-6 py-24">
      <h1
        class="pointer-events-none my-8 bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-6xl leading-none font-bold tracking-tight text-pretty whitespace-pre-wrap text-transparent max-md:text-5xl dark:from-white dark:to-gray-50/40"
      >
        Build beautiful websites using Vue & Nuxt
      </h1>
      <span class="text-muted text-center text-2xl font-normal max-lg:text-xl">
        Inspira UI is a collection of reusable, animated components powered by
        <NuxtLink
          href="https://tailwindcss.com/"
          target="_blank"
          class="text-primary"
        >
          TailwindCSS
        </NuxtLink>
        ,
        <NuxtLink
          href="https://motion.dev/docs/vue"
          target="_blank"
          class="text-primary"
        >
          motion-v
        </NuxtLink>
        ,
        <NuxtLink
          href="https://gsap.com/"
          target="_blank"
          class="text-primary"
        >
          GSAP
        </NuxtLink>
        &
        <NuxtLink
          href="https://threejs.org/"
          target="_blank"
          class="text-primary"
        >
          threejs
        </NuxtLink>
        — crafted to help you ship faster and better.
      </span>
      <span class="text-muted text-center text-2xl font-normal max-lg:text-xl">
        Whether you're starting a new project or refining a current one, this is the place to begin.
      </span>
      <div class="flex items-center justify-center gap-4">
        <NuxtLink :href="componentPath">
          <UButton
            label="Components"
            size="xl"
            variant="subtle"
          />
        </NuxtLink>
        <NuxtLink
          href="https://pro.inspira-ui.com"
          target="_blank"
        >
          <UButton
            label="Get Premium"
            size="xl"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
