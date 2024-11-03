<template>
  <div class="relative flex h-24 w-full flex-col items-center justify-center">
    <ConfettiButton
      class="rounded-lg bg-foreground px-4 py-2 text-background transition duration-500 hover:scale-110"
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
