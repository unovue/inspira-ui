<template>
  <ClientOnly>
    <div class="p-12 max-lg:p-4">
      <GlowBorder
        class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
      >
        <span
          class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-zinc-700/75"
        >
          Glow Border
        </span>
      </GlowBorder>
    </div>
  </ClientOnly>
</template>
