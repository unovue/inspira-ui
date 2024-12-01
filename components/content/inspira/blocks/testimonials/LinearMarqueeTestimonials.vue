<template>
  <div class="flex w-full max-w-7xl flex-col items-center justify-center p-4">
    <div class="flex flex-col gap-4 py-12 text-center">
      <div class="text-3xl font-semibold sm:text-4xl">What people say about us</div>
      <div class="text-lg font-light sm:text-xl">
        Here's what people say about <strong> Inspira UI</strong>
      </div>
    </div>
    <div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <!-- First Marquee -->
      <Marquee
        pause-on-hover
        class="[--duration:20s]"
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

      <!-- Second Marquee (reverse) -->
      <Marquee
        reverse
        pause-on-hover
        class="[--duration:20s]"
      >
        <ReviewCard
          v-for="review in secondRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "dark");

// Reviews data
const reviews = [
  {
    name: "kiri",
    username: "@kiruba_selvi6",
    body: "Oooohhh wowww...!!",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Sébastien Chopin",
    username: "@Atinux",
    body: "You ship 🚢",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Mattia Guariglia",
    username: "@matt_guariglia",
    body: "Omg 🥰",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Nelson🐐",
    username: "@Mathiasokafor3",
    body: "Thank you so much for all you do for the Vue/nuxt eco system.",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Premdas Vm",
    username: "@premdasvm",
    body: "Man, this is soo good! I've been jealous of React because their eco-system had Magic UI and other ones like this. Inspira UI is 🔥🙌🏼",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Pierre",
    username: "@PierreHenryBap",
    body: "It looks really awesome! Just noticed it a couple of days ago and I can’t wait to try it out.",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
  {
    name: "Waldemar Enns",
    username: "@WaldemarEnns",
    body: "Awesome! ⭐️ed it immediately",
    img: "https://inspira-ui.com/images/x-logo.svg",
  },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
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
