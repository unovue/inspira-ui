<template>
  <div class="w-full items-center justify-center px-8">
    <TracingBeam class="px-6">
      <div class="relative mx-auto max-w-2xl pt-4 antialiased">
        <div
          v-for="(item, index) in dummyContent"
          :key="`content-${index}`"
          class="mb-10"
        >
          <div
            class="mb-4 w-fit rounded-full bg-black px-2 text-sm text-white dark:bg-white dark:text-black"
          >
            {{ item.badge }}
          </div>

          <p :class="['mb-4 text-xl']">
            {{ item.title }}
          </p>

          <div class="prose prose-sm dark:prose-invert text-sm">
            <img
              v-if="item.image"
              :src="item.image"
              alt="blog thumbnail"
              class="mb-10 rounded-lg object-cover"
            />
            <div>
              <p
                v-for="(paragraph, idx) in item.description"
                :key="`desc-${idx}`"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TracingBeam>
  </div>
</template>

<script setup lang="ts">
// Dummy content data
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: [
      "Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo pariatur.",
      "Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.",
      "Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia adipisicing aliquip proident officia sunt.",
    ],
    badge: "Vue",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: [
      "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
      "In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.",
    ],
    badge: "Nuxt",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: [
      "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.",
    ],
    badge: "Inspira UI",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>
