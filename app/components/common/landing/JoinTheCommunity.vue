<script lang="ts" setup>
const links = [
  {
    icon: "i-simple-icons-discord",
    title: "Discord",
    description: "Ask questions and share work.",
    to: `https://discord.gg/Xbh5DwJRc9`,
    target: "_blank",
  },
  {
    icon: "i-simple-icons-x",
    title: "X",
    description: "Release updates.",
    to: `https://x.com/rahulv_dev`,
    target: "_blank",
  },
  {
    icon: "i-simple-icons-bluesky",
    title: "Bluesky",
    description: "Project updates.",
    to: `http://bsky.app/profile/inspira-ui.com`,
    target: "_blank",
  },
  {
    icon: "i-simple-icons-github",
    title: "GitHub",
    description: "Source, issues, and PRs.",
    to: `https://github.com/unovue/inspira-ui`,
    target: "_blank",
  },
];
</script>

<template>
  <div
    class="rounded-[3rem] bg-[#d5dfe6] p-2 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.62)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
  >
    <div
      class="rounded-[calc(3rem-0.5rem)] bg-white p-6 ring-1 ring-[#c4d0d8] dark:bg-[#07080b]/85 dark:ring-white/10"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p
            class="font-mono text-xs tracking-[0.2em] text-[#947545] uppercase dark:text-[#d6b16a]"
          >
            Community
          </p>
          <h3 class="mt-3 text-2xl leading-tight font-semibold tracking-normal">
            Community links.
          </h3>
          <p class="mt-3 text-sm leading-6 text-[#5d6670] dark:text-[#a7abb4]">
            Use these channels for help, release updates, issues, and contributions.
          </p>
        </div>
        <UIcon
          name="i-lucide-users-round"
          class="size-5 text-[#947545] dark:text-[#d6b16a]"
        />
      </div>

      <div
        class="mt-5 divide-y divide-[#d8e1e7] overflow-hidden rounded-[2rem] dark:divide-white/10"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :target="link.target"
          rel="noopener noreferrer"
          class="group flex items-center justify-between gap-4 bg-[#f7fafb] px-4 py-3 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#edf3f6] active:bg-[#e6edf1] dark:bg-white/[0.035] dark:hover:bg-white/[0.06] dark:active:bg-white/[0.055]"
        >
          <div class="flex items-center gap-3">
            <span
              class="grid size-8 shrink-0 place-items-center rounded-full bg-[#e6edf1] text-[#111315] ring-1 ring-[#c7d3db] dark:bg-white/[0.06] dark:text-[#f5f1e8] dark:ring-white/10"
            >
              <UIcon
                :name="link.icon"
                class="size-4"
              />
            </span>
            <div>
              <p class="text-sm font-medium">
                {{ link.title }}
              </p>
              <p class="mt-0.5 text-xs leading-5 text-[#5d6670] dark:text-[#a7abb4]">
                {{ link.description }}
              </p>
            </div>
          </div>
          <span
            class="grid size-8 shrink-0 place-items-center rounded-full bg-[#e6edf1] text-[#111315] ring-1 ring-[#c7d3db] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 dark:bg-white/[0.06] dark:text-[#f5f1e8] dark:ring-white/10"
          >
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-3.5"
            />
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
