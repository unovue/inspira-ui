<template>
  <div
    class="relative flex h-96 w-full flex-col items-center justify-center gap-4 overflow-clip rounded-xl"
  >
    <span class="absolute text-3xl opacity-50"> Hover here </span>
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
