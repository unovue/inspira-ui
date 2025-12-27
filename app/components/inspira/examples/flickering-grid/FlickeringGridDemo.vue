<template>
  <div class="relative h-[600px] w-full overflow-hidden rounded-lg">
    <FlickeringGrid
      class="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
      :square-size="4"
      :grid-gap="6"
      color="#60A5FA"
      :max-opacity="0.5"
      :flicker-chance="0.1"
    />
  </div>
</template>
