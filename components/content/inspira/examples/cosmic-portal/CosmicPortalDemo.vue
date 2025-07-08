<template>
  <div class="h-[28rem] w-full flex flex-col overflow-clip gap-4">
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
