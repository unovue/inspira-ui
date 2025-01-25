<template>
  <div class="flex h-[40rem] flex-col items-center justify-center px-4">
    <p class="mx-auto mb-10 max-w-3xl text-xl text-neutral-500 md:text-3xl dark:text-neutral-400">
      <LinkPreview
        url="https://tailwindcss.com"
        class="font-bold"
      >
        Tailwind CSS
      </LinkPreview>
      and
      <LinkPreview
        url="https://motion.unovue.com/"
        class="font-bold"
      >
        motion-v
      </LinkPreview>
      are a great way to build modern websites.
    </p>
    <p class="mx-auto max-w-3xl text-xl text-neutral-500 md:text-3xl dark:text-neutral-400">
      Visit
      <LinkPreview
        url="https://inspira-ui.com"
        :width="400"
        :height="200"
      >
        <span
          class="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent"
        >
          Inspira UI
        </span>
      </LinkPreview>
      for more cool components
    </p>
  </div>
</template>
