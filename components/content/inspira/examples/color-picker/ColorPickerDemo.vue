<template>
  <div class="flex flex-col items-center justify-center gap-6 p-6">
    <div class="flex items-center justify-center">
      <ColorPicker
        :value="color.hsl"
        type="hsla"
        :swatches="['#AEDEAE', '#FFD3B6', '#FFB6B9', '#FFC0CB', '#FFD1DC']"
        @value-change="setColor"
      >
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2"
        >
          <div
            class="w-4 h-4 rounded border mr-2"
            :style="{
              backgroundColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
            }"
          ></div>
          Pick Color
          <Icon
            name="lucide:chevron-down"
            :size="16"
          />
        </button>
      </ColorPicker>
    </div>

    <div class="w-full max-w-lg">
      <pre class="rounded-md bg-muted p-4 text-sm overflow-x-auto">
        <code class="text-muted-foreground">
<span class="text-foreground">&#123;</span>
  <span class="text-blue-400">"hex"</span>: <span class="text-red-400">"{{ color.hex }}"</span>,
  <span class="text-blue-400">"hsl"</span>: &#123;
    <span class="text-blue-400">"h"</span>: <span class="text-red-400">{{ Math.round(color.hsl.h) }}</span>,
    <span class="text-blue-400">"s"</span>: <span class="text-red-400">{{ Math.round(color.hsl.s) }}</span>,
    <span class="text-blue-400">"l"</span>: <span class="text-red-400">{{ Math.round(color.hsl.l) }}</span>
  &#125;,
  <span class="text-blue-400">"hsla"</span>: &#123;
    <span class="text-blue-400">"h"</span>: <span class="text-red-400">{{ Math.round(color.hsl.h) }}</span>,
    <span class="text-blue-400">"s"</span>: <span class="text-red-400">{{ Math.round(color.hsl.s) }}</span>,
    <span class="text-blue-400">"l"</span>: <span class="text-red-400">{{ Math.round(color.hsl.l) }}</span>,
    <span class="text-blue-400">"a"</span>: <span class="text-red-400">{{ color.hsl.a }}</span>
  &#125;,
  <span class="text-blue-400">"rgb"</span>: &#123;
    <span class="text-blue-400">"r"</span>: <span class="text-red-400">{{ Math.round(color.rgb.r) }}</span>,
    <span class="text-blue-400">"g"</span>: <span class="text-red-400">{{ Math.round(color.rgb.g) }}</span>,
    <span class="text-blue-400">"b"</span>: <span class="text-red-400">{{ Math.round(color.rgb.b) }}</span>
  &#125;,
  <span class="text-blue-400">"rgba"</span>: &#123;
    <span class="text-blue-400">"r"</span>: <span class="text-red-400">{{ Math.round(color.rgb.r) }}</span>,
    <span class="text-blue-400">"g"</span>: <span class="text-red-400">{{ Math.round(color.rgb.g) }}</span>,
    <span class="text-blue-400">"b"</span>: <span class="text-red-400">{{ Math.round(color.rgb.b) }}</span>,
    <span class="text-blue-400">"a"</span>: <span class="text-red-400">{{ color.rgb.a }}</span>
  &#125;
<span class="text-foreground">&#125;</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type ColorPickerValue } from "@/components/content/inspira/ui/color-picker";

const color = ref<ColorPickerValue>({
  hex: "#A35fFF",
  hsl: { h: 265.5, s: 100, l: 67, a: 1 },
  hsla: { h: 265.5, s: 100, l: 67, a: 1 },
  rgb: { r: 163, g: 95, b: 255, a: 1 },
  rgba: { r: 163, g: 95, b: 255, a: 1 },
});

function setColor(newColor: ColorPickerValue) {
  color.value = newColor;
}
</script>
