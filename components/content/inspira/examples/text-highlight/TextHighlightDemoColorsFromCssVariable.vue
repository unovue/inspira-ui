<template>
  <div class="flex justify-center text-blance p-10">
    <h1 class="text-4xl font-bold text-center text-balance leading-relaxed">
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
