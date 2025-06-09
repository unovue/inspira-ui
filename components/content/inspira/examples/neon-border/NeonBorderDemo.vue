<template>
  <div class="flex h-96 w-full flex-col items-center justify-center gap-16">
    <NeonBorder :animation-type="'none'">
      <input
        type="text"
        class="size-full rounded-lg px-4 text-sm bg-background"
        placeholder="No animation"
      />
    </NeonBorder>

    <NeonBorder>
      <input
        type="text"
        class="size-full rounded-lg px-4 text-sm bg-background"
        placeholder="Half border animation"
      />
    </NeonBorder>

    <NeonBorder :animation-type="'full'">
      <input
        type="text"
        class="size-full rounded-lg px-4 text-sm bg-background"
        placeholder="Full border animation"
      />
    </NeonBorder>
  </div>
</template>
