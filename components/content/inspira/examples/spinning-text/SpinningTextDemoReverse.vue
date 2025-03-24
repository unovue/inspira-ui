<template>
  <ClientOnly>
    <div class="flex min-h-[350px] w-full items-center justify-center">
      <SpinningText
        text="learn more · earn more · grow more ·"
        :duration="20"
        reverse
      />
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup></script>
<style scoped></style>
