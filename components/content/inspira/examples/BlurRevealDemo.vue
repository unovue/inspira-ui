<template>
  <ClientOnly>
    <BlurReveal
      :delay="0.2"
      :duration="0.75"
      class="p-8"
    >
      <h2 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">Hey there 👋</h2>
      <span class="text-pretty text-xl tracking-tighter xl:text-4xl/none sm:text-3xl">
        How is it going?
      </span>
    </BlurReveal>
  </ClientOnly>
</template>
