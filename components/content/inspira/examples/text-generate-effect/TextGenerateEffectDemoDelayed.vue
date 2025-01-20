<template>
  <ClientOnly>
    <div class="flex h-64 flex-col items-center justify-center max-lg:w-full min-md:flex-1">
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
