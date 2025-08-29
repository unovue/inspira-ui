<template>
  <div class="flex items-center justify-center text-xl min-h-96 w-full h-96 relative">
    <span class="hidden md:block">Move your mouse around</span>
    <span class="block md:hidden">Swipe anywhere to see the cursor</span>
    <ClientOnly>
      <SleekLineCursor />
    </ClientOnly>
  </div>
</template>
