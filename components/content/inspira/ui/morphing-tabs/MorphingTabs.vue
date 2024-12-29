<template>
  <div
    v-if="props.tabs.length"
    :class="cn('relative', props.class)"
    style="filter: url(&quot;#exclusionTabsGoo&quot;)"
  >
    <button
      v-for="tab in props.tabs"
      :key="tab"
      :class="cn('px-4 py-2 bg-primary text-background transition-all duration-500')"
      :style="{
        margin: `0 ${activeTab === tab ? props.margin : 0}px`,
      }"
      @click="emit('update:activeTab', tab)"
    >
      {{ tab }}
    </button>

    <div class="absolute w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter
            id="exclusionTabsGoo"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              :stdDeviation="blurStdDeviation"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 36 -12"
              result="goo"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";

interface Props {
  tabs: string[];
  activeTab: string;
  margin?: number;
  class?: string;
  blurStdDeviation?: number;
}

const props = withDefaults(defineProps<Props>(), {
  margin: 20,
  blurStdDeviation: 6,
});
const emit = defineEmits<{
  (e: "update:activeTab", tab: string): void;
}>();
</script>

<style></style>
