<template>
  <div class="flex flex-col justify-center items-center max-w-7xl w-full p-4">
    <div class="py-12 text-5xl font-semibold">
      Loved by community <span class="text-4xl"> ❤️</span>
    </div>
    <div
      class="relative w-full h-[430px] overflow-hidden rounded-xl border bg-white dark:bg-background shadow-lg"
    >
      <!-- Logo -->
      <div
        class="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 mt-4 bg-white bg-opacity-30 backdrop-filter border backdrop-blur-md rounded-3xl p-3"
      >
        <NuxtImg v-if="isDark" src="/logo-dark.svg" />
        <NuxtImg v-else src="/logo.svg" />
      </div>

      <!-- Center Text -->
      <div
        class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 mt-20"
      >
        <h3 class="text-4xl sm:text-5xl font-bold mb-2">
          What are you waiting for?
        </h3>
        <p class="text-base sm:text-lg m-4">
          Get started and start building awesome UI 😄
        </p>
        <NuxtLink to="getting-started/installation">
          <UiButton variant="default"> Get Started → </UiButton>
        </NuxtLink>
      </div>

      <!-- Tilted Marquees -->
      <div class="absolute inset-0 overflow-hidden">
        <Marquee
          :style="{ transform: 'translateY(-5rem) rotate(-16deg)' }"
          class="marquee"
          :pauseOnHover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(4rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pauseOnHover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(13rem) rotate(-16deg)' }"
          class="marquee"
          :pauseOnHover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>

        <Marquee
          :style="{ transform: 'translateY(22rem) rotate(-16deg)' }"
          reverse
          class="marquee"
          :pauseOnHover="false"
        >
          <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
          />
        </Marquee>
      </div>

      <!-- Gradient overlay to fade to white at the bottom -->
      <div
        class="absolute inset-0 top-0 bg-gradient-to-t from-white dark:from-background to-transparent pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");

// Reviews data
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Rows
const firstRow = ref(reviews);
</script>

<style scoped>
.marquee {
  --duration: 40s;
  position: absolute;
  left: -10%;
  width: 120%;
  padding: 0.5rem 0;
}
</style>
