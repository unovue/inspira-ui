<template>
  <div class="flex w-full justify-center">
    <Compare
      slide-mode="drag"
      class="rounded-xl !bg-zinc-950"
    >
      <template #first-content>
        <div class="size-full overflow-auto bg-zinc-900 p-8">
          <pre
            class="font-mono text-red-400"
            v-text="firstCode"
          ></pre>
        </div>
      </template>
      <template #second-content>
        <div class="size-full overflow-auto bg-zinc-900 p-8">
          <pre
            class="font-mono text-green-400"
            v-text="secondCode"
          ></pre>
        </div>
      </template>
    </Compare>
  </div>
</template>

<script setup lang="ts">
import { firstCode, secondCode } from "./code/index";
</script>
