<template>
  <ClientOnly>
    <div class="flex flex-col w-full items-center justify-center py-24">
      <div class="w-full relative max-w-xs">
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"
        />
        <div
          class="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
        >
          <div
            class="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 class="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p class="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <button
            class="border px-4 py-1 rounded-lg border-gray-500 text-gray-300"
          >
            Explore
          </button>
          <Meteors />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
