<template>
  <div class="flex items-center justify-center">
    <PhotoGallery :items="items" />
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    src: "https://images.pexels.com/photos/16834200/pexels-photo-16834200/free-photo-of-young-brunette-in-a-white-dress-sitting-on-a-bench-and-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/16834202/pexels-photo-16834202/free-photo-of-young-woman-in-a-white-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/16834194/pexels-photo-16834194/free-photo-of-woman-in-white-dress-posing-with-red-flowers-on-lap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/17362900/pexels-photo-17362900/free-photo-of-pretty-young-model-in-chinese-retro-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/19447919/pexels-photo-19447919/free-photo-of-model-in-a-pink-ao-dai-dress-with-a-bouquet-of-tulips-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/20332975/pexels-photo-20332975/free-photo-of-young-woman-posing-in-a-silk-slip-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/19732643/pexels-photo-19732643/free-photo-of-woman-in-white-dress-sitting-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/17347482/pexels-photo-17347482/free-photo-of-woman-in-dress-posing-with-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
</script>
