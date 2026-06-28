<template>
  <div
    class="rounded-[3rem] bg-[#d5dfe6] p-2 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.62)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
  >
    <div
      class="relative h-full overflow-hidden rounded-[calc(3rem-0.5rem)] bg-white ring-1 ring-[#c4d0d8] dark:bg-[#07080b]/85 dark:ring-white/10"
    >
      <div
        aria-hidden="true"
        class="absolute top-0 right-10 h-40 w-44 rounded-full bg-[#d9c49b]/18 blur-3xl dark:bg-[#d6b16a]/12"
      />

      <div class="relative flex items-start justify-between gap-4 px-6 py-6">
        <div>
          <p
            class="font-mono text-xs tracking-[0.2em] text-[#947545] uppercase dark:text-[#d6b16a]"
          >
            Repository
          </p>
          <h3 class="mt-3 text-3xl leading-tight font-semibold tracking-normal">
            Project activity.
          </h3>
          <p class="mt-3 max-w-xl text-sm leading-6 text-[#5d6670] dark:text-[#a7abb4]">
            See recent contributions, issues, and pull requests in one quick snapshot.
          </p>
        </div>
        <UIcon
          name="i-lucide-activity"
          class="size-5 text-[#947545] dark:text-[#d6b16a]"
        />
      </div>

      <div class="relative border-t border-[#d8e1e7] p-3 dark:border-white/10">
        <NuxtImg
          class="mx-auto aspect-[16/7] w-full rounded-[2rem] bg-[#f7fafb] object-contain p-3 ring-1 ring-[#cbd7df] dark:bg-[#050506]/80 dark:ring-white/10"
          src="https://repobeats.axiom.co/api/embed/da99e5e9c8ddaaff68b7f57b56ae21d5e0ea2ed2.svg"
          alt="Inspira UI repository activity chart"
          width="960"
          height="420"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
