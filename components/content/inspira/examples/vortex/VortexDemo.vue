<script setup lang="ts"></script>

<template>
  <div class="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
    <Vortex
      backgroundColor="black"
      class="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <h2 class="text-white text-2xl md:text-6xl font-bold text-center">The hell is this?</h2>
      <p class="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been burned and
        you&apos;ll have a scar.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <UiButton variant="outline" class="bg-blue-600 hover:bg-blue-600"> Order now </UiButton>
        <UiButton>Watch trailer</UiButton>
      </div>
    </Vortex>
  </div>
</template>
