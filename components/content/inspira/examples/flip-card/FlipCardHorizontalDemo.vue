<template>
  <div class="flex items-center justify-center">
    <FlipCard rotate="x">
      <template #default>
        <img
          src="https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="image"
          class="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
        />
      </template>
      <template #back>
        <div class="flex min-h-full flex-col gap-2">
          <h1 class="text-xl font-bold text-white">Inspira UI</h1>
          <p
            class="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100"
          >
            Inspira UI offers beautifully designed, reusable animation components and includes
            custom components developed by us and contributed by the community.
          </p>
        </div>
      </template>
    </FlipCard>
  </div>
</template>
