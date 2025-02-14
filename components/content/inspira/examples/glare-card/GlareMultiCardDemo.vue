<template>
  <div class="grid grid-cols-1 gap-10 overflow-scroll md:grid-cols-3">
    <GlareCard class="flex flex-col items-center justify-center">
      <img src="/logo-dark.svg" />
    </GlareCard>
    <GlareCard class="flex flex-col items-center justify-center">
      <img
        class="absolute inset-0 size-full object-cover"
        src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </GlareCard>
    <GlareCard class="flex flex-col items-start justify-end px-6 py-8">
      <p class="text-lg font-bold text-white">The greatest trick</p>
      <p class="mt-4 text-base font-normal text-neutral-200">
        The greatest trick the devil ever pulled was to convince the world that he didn&apos;t
        exist.
      </p>
    </GlareCard>
  </div>
</template>
