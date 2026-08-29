<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  cellSize: 8,
  frameRate: 60,
  paused: false,
  pixelRatio: 1,
});

const shaderCode = `
// Bitmap-to-ASCII technique by movAX13h, adapted for WebGL 2 and iChannel0.

uniform float uCellSize;

const int glyphs[43] = int[43](
  4096, 4096, 131200, 4329476, 459200, 4591748, 12652620,
  14749828, 18393220, 15239300, 17318431, 32641156, 18393412,
  18157905, 17463428, 14954572, 13177118, 6566222, 16269839,
  18444881, 18400814, 33061392, 15255086, 32045584, 18405034,
  15022158, 15018318, 16272942, 18415153, 32641183, 32540207,
  18732593, 18667121, 16267326, 32575775, 15022414, 15255537,
  32032318, 32045617, 33081316, 32045630, 33061407, 11512810
);

float drawGlyph(int glyph, vec2 uv) {
  vec2 cell = floor(clamp(uv, 0.0, 0.9999) * 5.0);
  int bit = int(cell.x + 5.0 * cell.y);
  return float((glyph >> bit) & 1);
}

int glyphForLuminance(float luminance) {
  int index = int(clamp(floor(luminance * 43.0), 0.0, 42.0));
  return glyphs[index];
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  if (iHasContent < 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  float cellSize = max(round(uCellSize), 5.0);
  vec2 cellOrigin = floor(fragCoord / cellSize) * cellSize;
  vec2 samplePoint = cellOrigin + cellSize * 0.5;
  vec4 source = texture(
    iChannel0,
    clamp(samplePoint / iResolution.xy, vec2(0.001), vec2(0.999))
  );
  float luminance = dot(source.rgb, vec3(0.3, 0.59, 0.11));
  vec2 glyphUv = fract(fragCoord / cellSize);
  float mask = drawGlyph(glyphForLuminance(luminance), glyphUv);
  vec3 color = iMouse.z > 0.0 ? vec3(mask) : source.rgb * mask;

  fragColor = vec4(color, source.a);
}
`;

interface Props {
  autoPause?: boolean;
  cellSize?: number;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  paused?: boolean;
  pixelRatio?: number;
}

const uniforms = computed(() => ({ uCellSize: props.cellSize }));
</script>

<template>
  <HtmlInCanvas
    :shader-code="shaderCode"
    :uniforms="uniforms"
    :auto-pause="props.autoPause"
    :frame-rate="props.frameRate"
    :paused="props.paused"
    :pixel-ratio="props.pixelRatio"
    :class="props.class"
  >
    <slot />
  </HtmlInCanvas>
</template>
