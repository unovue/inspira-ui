<template>
  <div
    class="relative size-full"
    :class="props.class"
  >
    <div
      class="absolute inset-0 flex items-center justify-center"
      :style="{
        maskImage: dataUrlMask,
        WebkitMaskImage: dataUrlMask,
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }"
    >
      <video
        class="size-full object-cover"
        :autoplay="autoPlay"
        :muted="muted"
        :loop="loop"
        :preload="preload"
      >
        <source :src="src" />
        Your browser does not support the video tag.
      </video>
    </div>
    <span class="sr-only">{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from "vue";

interface Props {
  src: string;
  class?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
  autoPlay: true,
  muted: true,
  loop: true,
  preload: "auto",
  fontSize: 20,
  fontWeight: "bold",
  textAnchor: "middle",
  dominantBaseline: "middle",
  fontFamily: "sans-serif",
});

const defaultSlot = useSlots().default;

const content = computed(
  () =>
    defaultSlot?.()
      .map((vnode) => vnode.children)
      .join("") ?? "",
);

const svgMask = ref("");

const dataUrlMask = computed(
  () => `url("data:image/svg+xml,${encodeURIComponent(svgMask.value)}")`,
);

function updateSvgMask() {
  const responsiveFontSize =
    typeof props.fontSize === "number" ? `${props.fontSize}vw` : props.fontSize;
  svgMask.value = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${props.fontWeight}' text-anchor='${props.textAnchor}' dominant-baseline='${props.dominantBaseline}' font-family='${props.fontFamily}'>${content.value}</text></svg>`;
}

watch(content, updateSvgMask);

watch(
  () => [
    props.fontSize,
    props.fontWeight,
    props.textAnchor,
    props.dominantBaseline,
    props.fontFamily,
  ],
  updateSvgMask,
);

onMounted(() => {
  updateSvgMask();
  window.addEventListener("resize", updateSvgMask);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSvgMask);
});
</script>
