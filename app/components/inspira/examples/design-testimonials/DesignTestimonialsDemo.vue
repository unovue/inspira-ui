<script lang="ts" setup>
const testimonials = [
  {
    quote:
      "The component structure is clear, flexible, and surprisingly elegant. It just works—no shadow clones required.",
    author: "Naruto Uzumaki",
    role: "Lead Frontend Ninja",
    company: "Hidden Leaf Labs",
  },
  {
    quote:
      "Thoughtful motion, precise timing, and no unnecessary noise. Design should feel effortless—this does.",
    author: "Itachi Uchiha",
    role: "Architect of Interfaces",
    company: "Akatsuki Systems",
  },
  {
    quote: "Clean visuals, smooth transitions, and zero friction. Honestly? It feels limitless.",
    author: "Gojo Satoru",
    role: "UI Performance Engineer",
    company: "Jujutsu Tech",
  },
  {
    quote:
      "Every detail feels intentional. The balance between motion and restraint is… impressive.",
    author: "Jin Sunwoo",
    role: "Product Strategist",
    company: "Shadow Guild",
  },
];
</script>
<template>
  <DesignTestimonials :testimonials />
</template>
