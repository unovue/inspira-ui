<template>
  <div class="relative flex h-96 min-h-96 w-full items-center justify-center text-xl">
    <span class="hidden md:block">Move your mouse around</span>
    <span class="block md:hidden">Swipe anywhere to see the cursor</span>
    <ClientOnly>
      <SleekLineCursor />
    </ClientOnly>
  </div>
</template>
