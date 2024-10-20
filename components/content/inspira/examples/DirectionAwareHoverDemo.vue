<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Direction Aware Hover Card Examples</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Basic usage -->
      <DirectionAwareHover
        image-url="https://images.unsplash.com/photo-1728755833852-2c138c84cfb1?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="shadow-lg"
      >
        <h2 class="text-xl font-semibold">Beautiful Landscape</h2>
        <p class="mt-2">Discover nature's wonders</p>
      </DirectionAwareHover>

      <!-- Custom styling -->
      <DirectionAwareHover
        image-url="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        class="border-4 border-primary"
        image-class="scale-100 hover:scale-110"
        children-class="bg-black bg-opacity-50 p-4 rounded"
      >
        <h2 class="text-xl font-semibold">Urban Adventure</h2>
        <p class="mt-2">Explore the city lights</p>
      </DirectionAwareHover>

      <!-- With button -->
      <DirectionAwareHover
        image-url="https://images.unsplash.com/photo-1664710476481-1213c456c56c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="shadow-xl rounded-xl overflow-hidden"
      >
        <h2 class="text-xl font-semibold">Culinary Delights</h2>
        <p class="mt-2">Savor exquisite flavors</p>
        <button class="mt-4 bg-white text-black px-4 py-2 rounded">View Recipe</button>
      </DirectionAwareHover>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
