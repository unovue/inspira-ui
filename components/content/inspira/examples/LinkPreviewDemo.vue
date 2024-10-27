<template>
  <div class="flex justify-center items-center h-[40rem] flex-col px-4">
    <p class="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
      <LinkPreview url="https://tailwindcss.com" class="font-bold"> Tailwind CSS </LinkPreview>
      and
      <LinkPreview url="https://motion.vueuse.org/" class="font-bold"> @vueuse/motion </LinkPreview>
      are a great way to build modern websites.
    </p>
    <p class="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
      Visit my
      <LinkPreview url="https://github.com/atif0075" :width="400" :height="200">
        <span
          class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Github
        </span>
      </LinkPreview>
      to see my
      <LinkPreview
        :height="200"
        image-src="https://avatars.githubusercontent.com/u/64689549?v=4"
        :is-static="true"
      >
        <span  class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"> Static Image, </span>
      </LinkPreview>
      that will not change.
    </p>
  </div>
</template>
