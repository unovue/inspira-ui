<template>
  <div class="text-blance flex justify-center p-10">
    <h1 class="text-center text-4xl leading-relaxed font-bold text-balance">
      CSS variables are amazing to match
      <TextHighlight class="my-amazing-class">your design system</TextHighlight>
    </h1>
  </div>
</template>

<style scoped>
.my-amazing-class {
  background-image: linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
</style>
