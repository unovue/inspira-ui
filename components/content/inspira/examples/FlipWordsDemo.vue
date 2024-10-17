<template>
  <div class="h-[40rem] flex justify-center items-center px-4">
    <div
      class="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"
    >
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
