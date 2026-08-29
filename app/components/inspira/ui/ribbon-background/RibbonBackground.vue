<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ShaderUniforms } from "../shader-toy";
import { cn } from "@inspira-ui/plugins";
import { computed } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  colors?: string[];
  backgroundColor?: string;
  transparent?: boolean;
  enableShadows?: boolean;
  angle?: number;
  offsetX?: number;
  offsetY?: number;
  speed?: number;
}

const props = withDefaults(defineProps<Props>(), {
  colors: () => ["#355070", "#6d597a", "#b56576", "#e56b6f", "#eaac8b"],
  backgroundColor: "#282828",
  transparent: false,
  enableShadows: true,
  angle: 0,
  offsetX: 0,
  offsetY: 0,
  speed: 1,
});

const defaultColors = ["#355070", "#6d597a", "#b56576", "#e56b6f", "#eaac8b"];

function toRgb(color: string): [number, number, number] {
  const trimmed = color.trim();
  const value = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((character) => character.repeat(2))
          .join("")
      : value;
  const parsed = Number.parseInt(normalized, 16);

  if (normalized.length !== 6 || Number.isNaN(parsed)) return [0, 0, 0];

  return [((parsed >> 16) & 255) / 255, ((parsed >> 8) & 255) / 255, (parsed & 255) / 255];
}

const uniforms = computed<ShaderUniforms>(() => {
  const colors = defaultColors.map((fallback, index) => toRgb(props.colors[index] ?? fallback));

  return {
    uRibbonColor0: colors[0]!,
    uRibbonColor1: colors[1]!,
    uRibbonColor2: colors[2]!,
    uRibbonColor3: colors[3]!,
    uRibbonColor4: colors[4]!,
    uBackgroundColor: toRgb(props.backgroundColor),
    uTransparent: props.transparent ? 1 : 0,
    uEnableShadows: props.enableShadows ? 1 : 0,
    uAngle: (props.angle * Math.PI) / 180,
    uOffset: [props.offsetX, props.offsetY],
  };
});

const shaderCode = `
uniform vec3 uRibbonColor0;
uniform vec3 uRibbonColor1;
uniform vec3 uRibbonColor2;
uniform vec3 uRibbonColor3;
uniform vec3 uRibbonColor4;
uniform vec3 uBackgroundColor;
uniform float uTransparent;
uniform float uEnableShadows;
uniform float uAngle;
uniform vec2 uOffset;

vec3 ribbonColor(int index) {
  if (index == 0) return uRibbonColor0;
  if (index == 1) return uRibbonColor1;
  if (index == 2) return uRibbonColor2;
  if (index == 3) return uRibbonColor3;
  return uRibbonColor4;
}

void mainImage(out vec4 outputColor, in vec2 fragmentCoordinate) {
  float aspect = iResolution.x / iResolution.y;
  vec2 center = vec2(0.5 * aspect, 0.5);
  vec2 uv = fragmentCoordinate / iResolution.xy;
  uv.x *= aspect;
  uv += vec2(-uOffset.x * aspect, uOffset.y);

  float sine = sin(uAngle);
  float cosine = cos(uAngle);
  uv = mat2(cosine, -sine, sine, cosine) * (uv - center) + center;

  float time = iTime * 0.25;
  vec3 color = uTransparent > 0.5 ? vec3(0.0) : uBackgroundColor;
  float alpha = 1.0 - uTransparent;

  for (int index = 0; index < 5; index++) {
    float ribbonIndex = float(index);
    float depth = (5.0 - ribbonIndex) / 5.0;
    float line = 0.5
      + 0.3 * sin(3.0 * time + 2.0 * uv.x + 0.3 * ribbonIndex)
      * sin(2.0 * time + uv.x);
    float width = 1.4 * (
      0.14
      + 0.12 * sin(1.5 * time + sin(0.5 * time) * 1.5 * uv.x + ribbonIndex)
      * sin(0.5 * time + 0.5 * uv.x)
    );
    float spacing = 0.3 * sin(time + 2.0 * uv.x) * depth;
    float distanceToRibbon = abs(uv.y - line + spacing) - width * depth * 0.5;

    if (distanceToRibbon > 0.0) {
      if (uEnableShadows > 0.5) {
        float shadowDrop = 20.0 / (abs(spacing) + 0.1);
        color *= vec3(mix(0.75, 1.0, 1.0 - exp(-shadowDrop * distanceToRibbon)));
      }
    } else {
      color = ribbonColor(index);
      alpha = 1.0;
    }
  }

  outputColor = vec4(color, alpha);
}
`;
</script>

<template>
  <div :class="cn('absolute inset-0', props.class)">
    <ShaderToy
      :shader-code="shaderCode"
      :uniforms="uniforms"
      :speed="props.speed"
      :interactive="false"
    />
  </div>
</template>
