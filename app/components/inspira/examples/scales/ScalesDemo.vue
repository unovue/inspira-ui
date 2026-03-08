<script lang="ts" setup>
interface Props {
  color?: string;
  size: number;
  orientation: "horizontal" | "vertical" | "diagonal";
}

defineProps<Props>();
</script>

<template>
  <div
    class="relative mx-auto flex w-full items-center justify-center overflow-hidden py-10 md:py-20"
  >
    <div class="relative h-80 w-72 rounded-lg bg-gray-100 dark:bg-neutral-800/50">
      <div class="absolute -inset-y-[30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
        <Scales
          :size="size"
          :color="color"
          :orientation="orientation"
          class="rounded-lg"
        />
      </div>
      <div class="absolute -inset-y-[30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
        <Scales
          :size="size"
          :color="color"
          :orientation="orientation"
          class="rounded-lg"
        />
      </div>
      <div class="absolute -inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
        <Scales
          :size="size"
          :color="color"
          :orientation="orientation"
          class="rounded-lg"
        />
      </div>
      <div class="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
        <Scales
          :size="size"
          :color="color"
          :orientation="orientation"
          class="rounded-lg"
        />
      </div>
      <div
        class="relative z-10 h-full w-full overflow-hidden rounded-none bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800"
      >
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
          alt="Portrait"
          class="h-full w-full object-cover filter"
        />
      </div>
    </div>
  </div>
</template>
