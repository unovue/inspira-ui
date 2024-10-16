<template>
  <div className="h-[40rem] flex justify-center items-center px-4">
    <div
      className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"
    >
      Build
      <FlipWords
        :words="['Hello World', 'Nuxt 3', 'Vue.js']"
        :duration="3000"
        className="text-2xl font-bold"
      />
      <br />
      websites with Aceternity UI
    </div>
  </div>
</template>
