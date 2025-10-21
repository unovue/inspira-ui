<template>
  <ClientOnly>
    <BlurReveal
      :delay="0.2"
      :duration="0.75"
      class="p-8"
    >
      <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hey there 👋</h2>
      <span class="text-xl tracking-tighter text-pretty sm:text-3xl xl:text-4xl/none">
        How is it going?
      </span>
    </BlurReveal>
  </ClientOnly>
</template>
