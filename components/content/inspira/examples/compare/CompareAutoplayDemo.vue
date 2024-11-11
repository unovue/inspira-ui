<template>
  <div
    class="flex h-[60vh] w-full items-center justify-center px-1 [perspective:800px] [transform-style:preserve-3d] md:px-8"
  >
    <div
      :style="{
        transform: 'rotateX(15deg) translateZ(80px)',
      }"
      class="mx-auto h-1/2 w-3/4 rounded-3xl border border-neutral-200 bg-neutral-100 p-1 md:h-3/4 md:p-4 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <Compare
        first-image="/images/Inspira-light.png"
        second-image="/images/Inspira-dark.png"
        first-content-class="object-cover object-left-center w-full h-96"
        second-content-class="object-cover object-left-center w-full h-96"
        class="size-full rounded-[22px] md:rounded-xl"
        slide-mode="hover"
        :autoplay="true"
      />
    </div>
  </div>
</template>
