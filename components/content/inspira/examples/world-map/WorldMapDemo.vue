<template>
  <div class="w-full bg-white py-40 dark:bg-black">
    <div class="mx-auto max-w-7xl text-center">
      <p class="text-xl font-bold text-black md:text-4xl dark:text-white">
        Remote
        <span class="text-neutral-400">
          <Motion
            v-for="(word, idx) in 'Connectivity'.split('')"
            :key="idx"
            as="span"
            class="inline-block"
            :initial="{ x: -10, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{ duration: 0.5, delay: idx * 0.04 }"
          >
            {{ word }}
          </Motion>
        </span>
      </p>
      <p class="mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg">
        Break free from traditional boundaries. Work from anywhere, at the comfort of your own
        studio apartment. Perfect for Nomads and Travellers.
      </p>
    </div>
    <WorldMap
      :dots="dots"
      :map-color="isDark ? '#FFFFFF40' : '#00000040'"
      :map-bg-color="isDark ? 'black' : 'white'"
    />
  </div>
</template>

<script lang="ts" setup>
import { Motion } from "motion-v";

const dots = [
  {
    start: {
      lat: 64.2008,
      lng: -149.4937,
    }, // Alaska (Fairbanks)
    end: {
      lat: 34.0522,
      lng: -118.2437,
    }, // Los Angeles
  },
  {
    start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
  },
  {
    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
  },
];

const isDark = computed(() => useColorMode().value == "dark");
</script>
