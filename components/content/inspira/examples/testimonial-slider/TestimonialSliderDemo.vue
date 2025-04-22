<template>
  <div class="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
    <div class="mt-[64px] flex justify-center px-12">
      <TestimonialSlider :testimonials="testimonials" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { rand } from "@vueuse/core";

const testimonials = [
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "Inspira UI is sleeker than my star cruiser. Launch-ready in seconds. Zero crashes, zero gravity.",
    name: "Buzz Lightyear",
    role: "Intergalactic Interface Command",
  },
  {
    img: `https://randomuser.me/api/portraits/women/${getRandomNumber()}.jpg`,
    quote:
      "Clickin' around this thing feels like ridin' a horse with turbo boosters. Inspira’s got giddyup!",
    name: "Jessie",
    role: "Yeehaw Engagement & Barnyard UX",
  },
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "I’ve seen some clunky UIs in my day... but this one? Smoother than a tumbleweed on Tuesday.",
    name: "Woody",
    role: "Sheriff",
  },
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "I was terrified. Then I clicked. Nothing exploded. Inspira UI is a safe space. I’m thriving.",
    name: "Rex",
    role: "Senior Panic Tester, Dinosaur Usability Lab",
  },
];

function getRandomNumber() {
  return rand(1, 99);
}
</script>
