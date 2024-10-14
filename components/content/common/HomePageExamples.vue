<template>
  <div class="flex flex-col items-center justify-center my-16 mt-24">
    <BlurReveal :delay="0" :duration="1">
      <div class="text-5xl font-semibold">Check out some examples!</div>
    </BlurReveal>
  </div>
  <div
    class="flex max-w-7xl w-full lg:flex-row flex-col items-center justify-center flex-wrap p-4 gap-4"
  >
    <DotBackground
      class="py-8 px-4 border rounded-lg flex flex-col gap-4 h-fit"
    >
      <h3
        class="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        3D Card Hover Effect
      </h3>
      <CardDemo2 />
    </DotBackground>

    <DotBackground class="py-8 px-4 border rounded-lg flex flex-col h-fit">
      <h3
        class="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        Text Hover Effect
      </h3>
      <p>Hover below to reveal text</p>
      <TextHoverEffectDemo />
    </DotBackground>

    <DotBackground
      class="py-8 px-4 border rounded-lg flex flex-col gap-4 h-fit"
    >
      <h3
        class="text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        Radiant Text
      </h3>
      <RadiantTextDemo />
    </DotBackground>
  </div>
</template>
