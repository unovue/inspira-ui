<script setup lang="ts">
interface Props {
  title?: string;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Scroll Island",
  height: 44,
});
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <span class="text-primary text-lg">
      See the scroll island in action on the top of this page
    </span>
    <ScrollIsland
      class="top-[calc(var(--ui-header-height)+1rem)]"
      :title="props.title"
      :height="props.height"
    >
      <div class="my-3 flex flex-col gap-2">
        <a href="#install-using-cli"># Install using CLI</a>
        <a href="#install-manually"># Install Manually</a>
        <a href="#api"># API</a>
        <a href="#features"># Features</a>
        <a href="#credits"># Credits</a>
      </div>
    </ScrollIsland>
  </div>
</template>
