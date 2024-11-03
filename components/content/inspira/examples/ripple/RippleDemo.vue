<template>
  <div
    class="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full"
  >
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Ripple
    </p>
    <Ripple
      class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      circle-class="border-[hsl(var(--primary))] bg-[#0000]/25 dark:bg-[#fff]/25"
    />
  </div>
</template>
