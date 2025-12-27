<template>
  <div className="relative h-[500px] w-full overflow-hidden">
    <GlowBorder
      :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
      :border-radius="10"
    />
    <div class="flex h-full w-full items-center justify-center">
      <span
        class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-zinc-700/75"
      >
        Glow Border
      </span>
    </div>
  </div>
</template>
