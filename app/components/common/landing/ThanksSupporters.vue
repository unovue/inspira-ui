<template>
  <div
    class="rounded-[3rem] bg-[#d5dfe6] p-2 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.62)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
  >
    <div
      class="rounded-[calc(3rem-0.5rem)] bg-white p-6 ring-1 ring-[#c4d0d8] dark:bg-[#07080b]/85 dark:ring-white/10"
    >
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            class="font-mono text-xs tracking-[0.2em] text-[#947545] uppercase dark:text-[#d6b16a]"
          >
            Contributors
          </p>
          <h3 class="mt-3 text-3xl leading-tight font-semibold tracking-normal">
            Amazing people behind Inspira UI.
          </h3>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-[#5d6670] dark:text-[#a7abb4]">
            Thanks to everyone who helped Inspira UI grow through code, docs, examples, fixes, and
            ideas.
          </p>
        </div>
        <NuxtLink
          to="https://github.com/unovue/inspira-ui/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-10 items-center justify-center rounded-full bg-[#f7fafb] px-4 text-sm font-medium text-[#111315] ring-1 ring-[#c7d3db] transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#edf3f6] active:scale-[0.98] dark:bg-white/[0.055] dark:text-[#f5f1e8] dark:ring-white/10 dark:hover:bg-white/[0.08]"
        >
          View contributors
        </NuxtLink>
      </div>

      <div
        class="mt-6 rounded-[2rem] bg-[#f7fafb] p-4 ring-1 ring-[#cbd7df] dark:bg-[#050506]/80 dark:ring-white/10"
      >
        <NuxtImg
          class="mx-auto aspect-[16/6] w-full max-w-4xl object-contain sm:aspect-[16/5]"
          src="https://contrib.rocks/image?repo=unovue/inspira-ui"
          alt="Inspira UI contributors"
          width="960"
          height="300"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
