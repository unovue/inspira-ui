<template>
  <div class="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">The hell is this?</h2>
      <p class="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been burned and
        you&apos;ll have a scar.
      </p>
      <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <UiButton
          variant="outline"
          class="bg-blue-600 hover:bg-blue-600"
        >
          Order now
        </UiButton>
        <UiButton>Watch trailer</UiButton>
      </div>
    </Vortex>
  </div>
</template>
