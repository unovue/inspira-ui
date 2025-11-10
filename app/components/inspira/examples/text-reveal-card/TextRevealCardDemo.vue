<template>
  <TextRevealCard class="mx-auto my-8">
    <template #header>
      <h2 class="mb-2 text-lg font-semibold text-white">Text Reveal</h2>
      <p class="text-sm text-[#a9a9a9]">Hover over the text to reveal the animation</p>
    </template>
    <template #text>
      <p
        class="bg-[#323238] bg-clip-text py-4 text-sm font-bold text-transparent sm:py-6 sm:text-3xl md:py-10 md:text-[3rem]"
      >
        Get ready to see what's hidden
      </p>
    </template>
    <template #revealText>
      <p
        :style="{
          textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
        }"
        class="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-4 text-sm font-bold text-white sm:py-6 sm:text-3xl md:py-10 md:text-[3rem]"
      >
        Light reveals what shadows hide
      </p>
    </template>
  </TextRevealCard>
  <TextRevealCard
    :stars-count="500"
    stars-class="bg-red-500"
    class="mx-auto my-8"
  >
    <template #header>
      <h2 class="mb-2 text-3xl font-semibold">Text Reveal</h2>
      <p class="text-sm text-[#a9a9a9]">Hover over the text to reveal the animation</p>
    </template>
    <template #text>
      <p class="text-white">
        A reveal animation smoothly unveils hidden content, enhancing user interaction. It's
        triggered by scrolling, clicking, or viewport entry, adding dynamic transitions to web
        elements.
      </p>
    </template>
    <template #revealText>
      <p class="text-red-500">
        A ɿɘvɘɒl ɒniɱɒʇiou ƨɱoothly unvɘilƨ ʜiddɘn coɴtɘnt, ɘnhɒncing uƨɘɿ intɘɿɒction. It'ƨ
        tɿiggɘɿɘd by ƨcɿolling, clicʞing, oɿ viɘwpoɿt ɘntɿy, ɒdding dynɒmic tɿɒnƨitionƨ to wɘb
        ɘlɘmɘntƨ.
      </p>
    </template>
  </TextRevealCard>
</template>
