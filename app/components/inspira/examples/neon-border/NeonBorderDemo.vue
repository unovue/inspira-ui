<template>
  <div class="flex h-96 w-full flex-col items-center justify-center gap-16">
    <NeonBorder animation-type="none">
      <input
        type="text"
        class="bg-background size-full rounded-lg px-4 text-sm"
        placeholder="No animation"
      >
    </NeonBorder>

    <NeonBorder>
      <input
        type="text"
        class="bg-background size-full rounded-lg px-4 text-sm"
        placeholder="Half border animation"
      >
    </NeonBorder>

    <NeonBorder animation-type="full">
      <input
        type="text"
        class="bg-background size-full rounded-lg px-4 text-sm"
        placeholder="Full border animation"
      >
    </NeonBorder>
  </div>
</template>
