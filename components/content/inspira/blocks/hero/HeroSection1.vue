<template>
  <section class="relative flex min-h-screen w-full flex-col items-center justify-center">
    <FallingStarsBg class="bg-black" />
    <div class="absolute inset-0 z-[1] bg-black opacity-50"></div>
    <div class="z-[2] flex max-w-xl flex-col items-center gap-2">
      <BlurReveal
        :delay="0.5"
        class="flex flex-col items-center justify-center gap-4"
      >
        <span
          class="flex flex-col items-center justify-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl"
        >
          <span>
            Building
            <FlipWords
              :words="['beautiful', 'stunning', 'amazing']"
              :duration="3000"
              class="w-52 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
            />
          </span>
          web experience
        </span>

        <span class="text-center text-xl">
          Inspira UI is the new way to build beautiful website
        </span>

        <div class="my-2 flex flex-row items-center justify-center gap-4">
          <UiButton to="/components"> Get Started </UiButton>
          <UiButton
            to="/blocks"
            variant="secondary"
          >
            Learn More
          </UiButton>
        </div>

        <div
          class="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-px md:shadow-xl"
        >
          <img
            src="/images/Inspira-dark.png"
            class="w-full rounded-md"
          />
          <BorderBeam
            :size="250"
            :duration="12"
            :delay="9"
            :border-width="2"
          />
        </div>
      </BlurReveal>
    </div>
  </section>
</template>
