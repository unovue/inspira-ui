<template>
  <div
    class="relative isolate overflow-hidden pt-8 pb-24 text-[#121313] sm:pt-12 dark:text-[#f5f1e8]"
  >
    <Hero />
    <QuickLinks />

    <section class="relative mt-28 sm:mt-40">
      <div
        aria-hidden="true"
        class="absolute -top-10 left-1/2 h-px w-screen -translate-x-1/2 bg-linear-to-r from-transparent via-[#dce3e7] to-transparent dark:via-white/10"
      />

      <div class="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p
            class="font-mono text-xs tracking-[0.22em] text-[#947545] uppercase dark:text-[#d6b16a]"
          >
            Project info
          </p>
          <h2
            class="mt-5 max-w-2xl text-4xl leading-[0.96] font-semibold tracking-normal text-balance sm:text-5xl"
          >
            Open source details in one place.
          </h2>
        </div>
        <p
          class="max-w-2xl text-base leading-7 text-[#5d6670] lg:justify-self-end dark:text-[#a7abb4]"
        >
          Repository activity, sponsors, contributors, and community links are grouped here so the
          documentation can stay focused on usage.
        </p>
      </div>

      <div class="mt-10 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
        <RepoStats />
        <div class="grid gap-4">
          <SupportUs />
          <JoinTheCommunity />
        </div>
      </div>

      <div class="mt-4">
        <ThanksSupporters />
      </div>
    </section>
  </div>
</template>
