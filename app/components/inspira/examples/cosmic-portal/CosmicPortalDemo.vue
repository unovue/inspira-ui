<script lang="ts" setup>
const cosmicPortal = useTemplateRef("cosmicPortal");

function activatePortal() {
  if (!cosmicPortal.value) return;
  cosmicPortal.value.activatePortal();
}

function shiftDimensions() {
  if (!cosmicPortal.value) return;
  cosmicPortal.value.shiftDimensions();
}
</script>

<template>
  <div class="flex h-[28rem] w-full flex-col gap-4 overflow-clip">
    <CosmicPortal
      ref="cosmicPortal"
      container-class="rounded-lg"
    />
    <div class="flex flex-row items-center justify-center gap-4">
      <UiButton @click="activatePortal"> Activate Portal </UiButton>
      <UiButton @click="shiftDimensions"> Shift Dimensions </UiButton>
    </div>
  </div>
</template>
