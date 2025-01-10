<template>
  <div class="relative grid h-[500px] place-content-center">
    <InteractiveGridPattern
      :class="'[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]'"
      :width="20"
      :height="20"
      :squares="[80, 80]"
      squares-class-name="hover:fill-blue-500"
    />
  </div>
</template>
