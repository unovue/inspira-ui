<template>
  <div class="relative flex flex-col w-full h-24 items-center justify-center">
    <ConfettiButton
      class="bg-foreground text-background px-4 py-2 rounded-lg hover:scale-110 transition duration-500"
      :options="{
        get angle() {
          return Math.random() * 360;
        },
      }"
    >
      Random Confetti 🎉
    </ConfettiButton>
  </div>
</template>
