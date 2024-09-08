<template>
  <ClientOnly>
    <BlurReveal :delay="0.1" :duration="0.5" class="p-8">
      <h2
        class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
      >
        Hey there 👋
      </h2>
      <span
        class="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none"
      >
      How is it going?
      </span>
    </BlurReveal>
  </ClientOnly>
</template>
