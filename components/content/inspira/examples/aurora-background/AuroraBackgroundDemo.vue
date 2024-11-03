<template>
  <AuroraBackground>
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        },
      }"
      class="relative flex flex-col items-center justify-center gap-4 px-4"
    >
      <div class="text-center text-3xl font-bold md:text-7xl dark:text-white">
        Background lights are cool you know.
      </div>
      <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
        And this, is chemical burn.
      </div>
      <button
        class="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Burn it now
      </button>
    </div>
  </AuroraBackground>
</template>
