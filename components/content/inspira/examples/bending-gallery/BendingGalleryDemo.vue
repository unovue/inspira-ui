<template>
  <div
    class="relative h-96 w-full border border-zinc-800 rounded-xl overflow-clip flex flex-col items-center justify-center gap-24"
  >
    <BendingGallery
      :items="items"
      :bend="2"
      :border-radius="0.1"
    />
  </div>
</template>

<script lang="ts" setup>
const items = ref<Array<{ image: string; text: string }>>([
  {
    image:
      "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "",
  },
  {
    image:
      "https://images.pexels.com/photos/16245254/pexels-photo-16245254/free-photo-of-chatgpt-a-chatbot-for-your-website.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "",
  },
  {
    image:
      "https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "",
  },
  {
    image:
      "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "",
  },
  {
    image:
      "https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "",
  },
]);
</script>
