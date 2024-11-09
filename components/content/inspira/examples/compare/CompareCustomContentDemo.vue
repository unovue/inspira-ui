<template>
  <div class="flex w-full justify-center">
    <Compare
      class="rounded-xl shadow-lg"
      :autoplay="true"
      :autoplay-duration="3000"
      slide-mode="hover"
    >
      <template #first-content>
        <div class="flex size-full items-center justify-center bg-blue-500">
          <div class="text-4xl font-bold text-white">☀️ Day</div>
        </div>
      </template>
      <template #second-content>
        <div class="flex size-full items-center justify-center bg-gray-900">
          <div class="text-4xl font-bold text-white">🌙 Night</div>
        </div>
      </template>
    </Compare>
  </div>
</template>
