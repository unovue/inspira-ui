<template>
  <div class="flex h-[40rem] w-full items-center justify-center overflow-hidden">
    <SVGMask class="h-[40rem] rounded-md border">
      <template #base>
        The first rule of <span class="text-red-500">MRR Club</span> is you do not talk about MRR
        Club. The second rule of MRR Club is you DO NOT talk about
        <span class="text-red-500">MRR Club</span>.
      </template>
      <template #reveal>
        <p class="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800">
          The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club
          is you DO NOT talk about MRR Club.
        </p>
      </template>
    </SVGMask>
  </div>
</template>
