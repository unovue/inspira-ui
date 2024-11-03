<template>
  <div class="flex h-[40rem] items-center justify-center px-4">
    <div class="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
      Vuejs: The
      <FlipWords
        :words="['Progressive', 'Approachable', 'Performant', 'Versatile']"
        :duration="3000"
        class="text-4xl !text-primary"
      />
      <div>
        JavaScript Framework for building <br />
        Modern Web Apps
      </div>
    </div>
  </div>
</template>
