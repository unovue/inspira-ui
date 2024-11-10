<template>
  <div
    class="flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-16 font-heading"
  >
    <Text3d
      class="text-8xl font-bold max-md:text-7xl"
      shadow-color="red"
    >
      3D
    </Text3d>
    <Text3d
      class="text-8xl font-black max-md:text-7xl"
      shadow-color="skyblue"
      :animate="false"
    >
      IS
    </Text3d>
    <Text3d class="text-8xl font-bold max-md:text-7xl">AWESOME</Text3d>
  </div>
</template>
