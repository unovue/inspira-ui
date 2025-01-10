<template>
  <ClientOnly>
    <div class="h-64 flex flex-col min-md:flex-1 max-lg:w-full items-center justify-center">
      <TextGenerateEffect
        words="Nuxt is an open source framework that makes web development intuitive and powerful."
        :delay="0"
      />
      <TextGenerateEffect
        words="Create performant and production-grade full-stack web apps and websites with confidence."
        :delay="3000"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts"></script>
