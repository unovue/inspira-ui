<template>
  <div class="container mx-auto p-4 sm:p-6 lg:p-8">
    <!-- Usage instructions -->
    <div class="mb-12 rounded-xl bg-gray-50 p-6 dark:bg-gray-900 sm:mb-16 sm:p-8">
      <h3 class="mb-4 text-lg font-semibold sm:text-xl">How to Use</h3>
      <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
        <li><strong>Desktop:</strong> Hover over the cards to see the direction-aware effect</li>
        <li><strong>Mobile:</strong> Tap on the cards to trigger the overlay effect</li>
      </ul>
    </div>

    <!-- Grid with proper spacing and responsive design -->
    <div class="grid grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
      <!-- Basic usage -->
      <div class="flex justify-center">
        <DirectionAwareHover
          image-url="https://images.unsplash.com/photo-1728755833852-2c138c84cfb1?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"
        >
          <h2 class="text-lg font-semibold sm:text-xl">Beautiful Landscape</h2>
          <p class="mt-1 text-sm opacity-90 sm:mt-2 sm:text-base">Discover nature's wonders</p>
        </DirectionAwareHover>
      </div>

      <!-- Custom styling -->
      <div class="flex justify-center">
        <DirectionAwareHover
          image-url="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          class="border-2 border-blue-500 shadow-xl ring-2 ring-blue-200 dark:border-blue-400 dark:ring-blue-800"
          image-class="scale-110 hover:scale-125 transition-transform duration-500"
          children-class="bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-b-lg backdrop-blur-sm"
        >
          <h2 class="text-lg font-semibold sm:text-xl">Urban Adventure</h2>
          <p class="mt-1 text-sm opacity-90 sm:mt-2 sm:text-base">Explore the city lights</p>
        </DirectionAwareHover>
      </div>

      <!-- With button -->
      <div class="flex justify-center md:col-span-2 lg:col-span-1">
        <DirectionAwareHover
          image-url="https://images.unsplash.com/photo-1664710476481-1213c456c56c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-300 dark:ring-gray-700"
          children-class="bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 sm:p-4 rounded-b-xl"
        >
          <h2 class="text-lg font-semibold sm:text-xl">Culinary Delights</h2>
          <p class="mt-1 text-sm opacity-90 sm:mt-2 sm:text-base">Savor exquisite flavors</p>
          <button
            class="mt-3 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 sm:mt-4 sm:px-4 sm:py-2 sm:text-base"
          >
            View Recipe
          </button>
        </DirectionAwareHover>
      </div>
    </div>

    <!-- Additional examples section -->
    <div class="mt-12 sm:mt-16">
      <h2 class="mb-6 text-xl font-bold sm:text-2xl">More Examples</h2>

      <div class="grid grid-cols-2 gap-6">
        <!-- Minimalist card -->
        <div class="flex justify-center">
          <DirectionAwareHover
            image-url="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop"
            class="rounded-2xl shadow-lg"
            children-class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center"
          >
            <h3 class="text-base font-medium sm:text-lg">Mountain Peak</h3>
          </DirectionAwareHover>
        </div>

        <!-- Artistic card -->
        <div class="flex justify-center">
          <DirectionAwareHover
            image-url="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2624&auto=format&fit=crop"
            class="rounded-full shadow-2xl ring-4 ring-purple-200 dark:ring-purple-800"
            children-class="absolute inset-0 bg-purple-600/20 backdrop-blur-[1px] rounded-full flex items-center justify-center text-center p-4"
          >
            <div>
              <h3 class="text-base font-bold sm:text-lg">Abstract Art</h3>
              <p class="text-xs opacity-90 sm:text-sm">Creative Expression</p>
            </div>
          </DirectionAwareHover>
        </div>

        <!-- Tech card -->
        <div class="flex justify-center">
          <DirectionAwareHover
            image-url="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-lg shadow-lg ring-2 ring-green-400 dark:ring-green-600"
            children-class="bg-gradient-to-r from-green-600/90 to-blue-600/90 backdrop-blur-sm p-3 rounded-b-lg"
          >
            <h3 class="text-base font-semibold sm:text-lg">Technology</h3>
            <p class="text-xs opacity-90 sm:text-sm">Innovation Hub</p>
          </DirectionAwareHover>
        </div>

        <!-- Nature card -->
        <div class="flex justify-center">
          <DirectionAwareHover
            image-url="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop"
            class="rounded-lg shadow-lg"
            image-class="scale-110 hover:scale-130 transition-transform duration-700 sepia hover:sepia-0"
            children-class="bg-gradient-to-t from-emerald-900/90 to-transparent p-3"
          >
            <h3 class="text-base font-semibold sm:text-lg">Forest Trail</h3>
            <p class="text-xs opacity-90 sm:text-sm">Nature's Path</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
