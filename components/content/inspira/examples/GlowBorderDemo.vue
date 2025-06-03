<template>
  <div className="relative h-[500px] w-full overflow-hidden">
    <GlowBorder
      :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
      :border-radius="10"
    />
    <div class="h-full w-full flex items-center justify-center">
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-zinc-700/75"
      >
        Glow Border
      </span>
    </div>
  </div>
</template>
