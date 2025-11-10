<template>
  <ClientOnly>
    <div
      class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
    >
      <span
        class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
      >
        Border Beam
      </span>
      <BorderBeam
        :size="250"
        :duration="12"
        :delay="9"
        :border-width="2"
      />
    </div>
  </ClientOnly>
</template>
