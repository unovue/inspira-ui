<template>
  <TextRevealCard class="mx-auto my-8">
    <template #header>
      <h2 class="text-white text-lg mb-2 font-semibold">Text Reveal</h2>
      <p class="text-[#a9a9a9] text-sm">
        Hover over the text to reveal the animation
      </p>
    </template>
    <template #text>
      <p
        class="text-sm sm:text-3xl md:text-[3rem] py-4 sm:py-6 md:py-10 font-bold bg-clip-text text-transparent bg-[#323238]"
      >
        Get ready to see what's hidden
      </p>
    </template>
    <template #revealText>
      <p
        :style="{
          textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
        }"
        class="text-sm sm:text-3xl md:text-[3rem] py-4 sm:py-6 md:py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
      >
        Light reveals what shadows hide
      </p>
    </template>
  </TextRevealCard>
  <TextRevealCard
    :starsCount="500"
    starsClass="bg-red-500"
    class="mx-auto my-8"
  >
    <template #header>
      <h2 class="text-3xl mb-2 font-semibold">Text Reveal</h2>
      <p class="text-[#a9a9a9] text-sm">
        Hover over the text to reveal the animation
      </p>
    </template>
    <template #text>
      <p class="text-white">
        A reveal animation smoothly unveils hidden content, enhancing user
        interaction. It's triggered by scrolling, clicking, or viewport entry,
        adding dynamic transitions to web elements.
      </p>
    </template>
    <template #revealText>
      <p class="text-red-500">
        A ɿɘvɘɒl ɒniɱɒʇiou ƨɱoothly unvɘilƨ ʜiddɘn coɴtɘnt, ɘnhɒncing uƨɘɿ
        intɘɿɒction. It'ƨ tɿiggɘɿɘd by ƨcɿolling, clicʞing, oɿ viɘwpoɿt ɘntɿy,
        ɒdding dynɒmic tɿɒnƨitionƨ to wɘb ɘlɘmɘntƨ.
      </p>
    </template>
  </TextRevealCard>
</template>
