<template>
  <div>
    <ClientOnly>
      <TrueFocus
        sentence="True Focus"
        manual-mode
        :blur-amount="5"
        border-color="pink"
        :animation-duration="2"
        :pause-between-animations="1"
      />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
