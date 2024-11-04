<template>
  <div
    class="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full"
  >
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Blobs
    </p>
    <small>Are awesome</small>
    <Ripple
      class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      circle-class="border-[hsl(var(--primary))] bg-primary/25 blobed"
    />
  </div>
</template>

<style scoped>
:deep(.blobed) {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
</style>
