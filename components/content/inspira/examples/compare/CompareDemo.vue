<template>
  <div class="flex w-full justify-center">
    <div
      class="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <Compare
        first-image="https://images.vscodethemes.com/antfu.theme-vitesse/vitesse-light-soft-js-preview-4JM.svg"
        second-image="https://images.vscodethemes.com/antfu.theme-vitesse/vitesse-dark-soft-js-preview-4JM.svg"
        first-content-class="object-cover object-left-top rounded-xl overflow-hidden"
        second-content-class="object-cover object-left-top rounded-xl overflow-hidden"
        class="h-[250px] w-[200px] md:h-96 md:w-[500px]"
        slide-mode="hover"
      >
      </Compare>
    </div>
  </div>
</template>
