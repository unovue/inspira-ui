<template>
  <div
    class="relative h-96 w-full rounded-xl overflow-clip flex flex-col items-center justify-center gap-4"
  >
    <span class="absolute opacity-50 text-3xl"> Hover here </span>
    <TailedCursor
      :base-thickness="30"
      :colors="['#ffffff']"
      :speed-multiplier="0.5"
      :max-age="500"
      :enable-fade="false"
      :enable-shader-effect="false"
    />
  </div>
</template>
