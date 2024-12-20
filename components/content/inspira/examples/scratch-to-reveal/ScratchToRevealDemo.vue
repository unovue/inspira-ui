<template>
  <ScratchToReveal
    :width="250"
    :height="250"
    :min-scratch-percentage="50"
    class="mx-auto flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
    :gradient-colors="['#A97CF8', '#F38CB8', '#FDCC92']"
    @complete="handleComplete"
  >
    <div class="text-8xl">🥳</div>
  </ScratchToReveal>
</template>

<script lang="ts" setup>
function handleComplete() {
  // when scratch is completed do something
}
</script>
