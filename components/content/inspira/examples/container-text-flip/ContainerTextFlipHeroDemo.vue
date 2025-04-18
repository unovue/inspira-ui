<template>
  <div class="flex w-full items-center justify-center">
    <Motion
      as="h1"
      :initial="{
        opacity: 0,
      }"
      :while-in-view="{
        opacity: 1,
      }"
      :class="
        cn(
          'relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100',
        )
      "
      layout
    >
      <div class="inline-block">
        Make your websites look 10x
        <ContainerTextFlip :words="['better', 'modern', 'beautiful', 'awesome']" />
      </div>
    </Motion>
  </div>
</template>

<script lang="ts" setup>
import { Motion } from "motion-v";
import { cn } from "~/lib/utils";
</script>
