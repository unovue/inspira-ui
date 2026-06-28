<script lang="ts" setup></script>

<template>
  <UMain class="relative -mt-16 pt-16">
    <div
      class="dark:pattern-background-d pattern-background-l absolute inset-x-0 top-28 bottom-0 z-[-1]"
    />
    <ComponentStatusMarquee />
    <div class="pt-12">
      <slot />
    </div>
  </UMain>
</template>
