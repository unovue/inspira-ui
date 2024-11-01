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
      class="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div class="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Background lights are cool you know.
      </div>
      <div class="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        And this, is chemical burn.
      </div>
      <button
        class="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
      >
        Burn it now
      </button>
    </div>
  </AuroraBackground>
</template>
