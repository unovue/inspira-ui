<script lang="ts" setup>
interface Props {
  text: string;
  folderSize: { width: number; height: number };
  teaserImageSize: { width: number; height: number };
  hoverImageSize: { width: number; height: number };
  hoverTranslateY: number;
  hoverSpread: number;
  hoverRotation: number;
}

defineProps<Props>();
</script>

<template>
  <div class="flex h-56 w-full flex-col items-center justify-center gap-2">
    <ImagesBadge
      :text
      :images="[
        'https://assets.aceternity.com/pro/agenforce-1.webp',
        'https://assets.aceternity.com/pro/agenforce-2.webp',
        'https://assets.aceternity.com/pro/agenforce-3.webp',
      ]"
      :folder-size="folderSize"
      :teaser-image-size="teaserImageSize"
      :hover-image-size="hoverImageSize"
      :hover-translate-y="hoverTranslateY"
      :hover-spread="hoverSpread"
      :hover-rotation="hoverRotation"
    />
  </div>
</template>
