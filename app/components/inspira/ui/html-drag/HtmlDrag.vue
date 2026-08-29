<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  frameRate: 60,
  mouseDamping: 0.9,
  mouseEnabled: false,
  paused: false,
  pixelRatio: 1,
  strength: 1.25,
});

const shaderCode = `
in vec2 surfaceUv;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  if (iHasContent < 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  fragColor = texture(iChannel0, clamp(surfaceUv, vec2(0.001), vec2(0.999)));
}
`;

const vertexShaderCode = `
uniform float uDragStrength;

out vec2 surfaceUv;

void main() {
  float held = step(0.5, iMouse.z);
  float movement = iScrollVelocity + iPointerVelocity.y * held * 4.0;
  float bend = clamp(
    movement / max(iResolution.y, 1.0) * uDragStrength,
    -0.3,
    0.3
  );
  vec2 surfacePosition = position;
  surfacePosition.y *= 1.0 + abs(bend);
  surfacePosition.y -= sin(textureCoord.x * 3.14159265359) * bend;

  surfaceUv = textureCoord;
  gl_Position = vec4(surfacePosition, 0.0, 1.0);
}
`;

interface Props {
  autoPause?: boolean;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  mouseDamping?: number;
  mouseEnabled?: boolean;
  paused?: boolean;
  pixelRatio?: number;
  strength?: number;
}

const uniforms = computed(() => ({ uDragStrength: props.strength }));
</script>

<template>
  <HtmlInCanvas
    :shader-code="shaderCode"
    :vertex-shader-code="vertexShaderCode"
    :uniforms="uniforms"
    :auto-pause="props.autoPause"
    :frame-rate="props.frameRate"
    :mouse-damping="props.mouseDamping"
    :interactive="props.mouseEnabled"
    :paused="props.paused"
    :pixel-ratio="props.pixelRatio"
    :class="cn(props.mouseEnabled && 'select-none', props.class)"
  >
    <slot />
  </HtmlInCanvas>
</template>
