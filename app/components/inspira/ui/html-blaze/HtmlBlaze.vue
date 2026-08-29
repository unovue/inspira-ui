<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { HtmlInCanvas } from "../html-in-canvas";

const props = withDefaults(defineProps<Props>(), {
  autoPause: true,
  frameRate: 60,
  paused: false,
  pixelRatio: 1,
  scale: 6,
  speed: 1,
  strength: 0.03,
});

const shaderCode = `
// Simplex noise copyright (C) 2011 Ashima Arts, distributed under the MIT License.
// https://github.com/ashima/webgl-noise

uniform float uScale;
uniform float uSpeed;
uniform float uStrength;

vec3 mod289(vec3 value) {
  return value - floor(value * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 value) {
  return value - floor(value * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 value) {
  return mod289(((value * 34.0) + 1.0) * value);
}

float simplexNoise(vec3 point) {
  const vec2 c = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 d = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 cell = floor(point + dot(point, c.yyy));
  vec3 corner0 = point - cell + dot(cell, c.xxx);
  vec3 order = step(corner0.yzx, corner0.xyz);
  vec3 inverseOrder = 1.0 - order;
  vec3 corner1Offset = min(order.xyz, inverseOrder.zxy);
  vec3 corner2Offset = max(order.xyz, inverseOrder.zxy);
  vec3 corner1 = corner0 - corner1Offset + c.xxx;
  vec3 corner2 = corner0 - corner2Offset + c.yyy;
  vec3 corner3 = corner0 - d.yyy;

  cell = mod289(cell);
  vec4 permutation = permute(
    permute(
      permute(cell.z + vec4(0.0, corner1Offset.z, corner2Offset.z, 1.0))
        + cell.y + vec4(0.0, corner1Offset.y, corner2Offset.y, 1.0)
    ) + cell.x + vec4(0.0, corner1Offset.x, corner2Offset.x, 1.0)
  );

  float seventh = 1.0 / 7.0;
  vec3 ns = seventh * d.wyz - d.xzx;
  vec4 index = permutation - 49.0 * floor(permutation * ns.z * ns.z);
  vec4 xIndex = floor(index * ns.z);
  vec4 yIndex = floor(index - 7.0 * xIndex);
  vec4 x = xIndex * ns.x + ns.yyyy;
  vec4 y = yIndex * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 base0 = vec4(x.xy, y.xy);
  vec4 base1 = vec4(x.zw, y.zw);
  vec4 sign0 = floor(base0) * 2.0 + 1.0;
  vec4 sign1 = floor(base1) * 2.0 + 1.0;
  vec4 correction = -step(h, vec4(0.0));
  vec4 gradient0 = base0.xzyw + sign0.xzyw * correction.xxyy;
  vec4 gradient1 = base1.xzyw + sign1.xzyw * correction.zzww;

  vec3 p0 = vec3(gradient0.xy, h.x);
  vec3 p1 = vec3(gradient0.zw, h.y);
  vec3 p2 = vec3(gradient1.xy, h.z);
  vec3 p3 = vec3(gradient1.zw, h.w);
  vec4 normalization = inversesqrt(
    vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
  );
  p0 *= normalization.x;
  p1 *= normalization.y;
  p2 *= normalization.z;
  p3 *= normalization.w;

  vec4 weight = max(
    0.6 - vec4(
      dot(corner0, corner0),
      dot(corner1, corner1),
      dot(corner2, corner2),
      dot(corner3, corner3)
    ),
    0.0
  );
  weight *= weight;
  return 42.0 * dot(
    weight * weight,
    vec4(dot(p0, corner0), dot(p1, corner1), dot(p2, corner2), dot(p3, corner3))
  );
}

float randomValue(vec2 seed) {
  seed = fract(seed * vec2(5.3983, 5.4427));
  seed += dot(seed.yx, seed.xy + vec2(21.5351, 14.3137));
  return fract(seed.x * seed.y * 95.4337);
}

float noiseStack(vec3 point, int octaves, float falloff) {
  float result = simplexNoise(point);
  float weight = 1.0;

  if (octaves > 1) {
    point *= 2.0;
    weight *= falloff;
    result = (1.0 - weight) * result + weight * simplexNoise(point);
  }
  if (octaves > 2) {
    point *= 2.0;
    weight *= falloff;
    result = (1.0 - weight) * result + weight * simplexNoise(point);
  }
  if (octaves > 3) {
    point *= 2.0;
    weight *= falloff;
    result = (1.0 - weight) * result + weight * simplexNoise(point);
  }

  return result * 0.5 + 0.5;
}

vec2 noisePair(vec3 point, int octaves, float falloff) {
  return vec2(
    noiseStack(point, octaves, falloff),
    noiseStack(point + vec3(3984.293, 423.21, 5235.19), octaves, falloff)
  );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  float time = iTime * max(uSpeed, 0.01) * 0.5;
  float horizontal = uv.x;
  float vertical = uv.y;
  float flameHeight = max(iResolution.y * 0.62, 1.0);
  float flameY = fragCoord.y / flameHeight;
  float heightFalloff = clamp(2.0 - flameY, 0.0, 1.0);
  float clippedHeight = min(flameY, 1.0);
  float inverseHeight = 1.0 - clippedHeight;
  float fuelProfile = max(1.0 - abs(2.0 * horizontal - 1.0), 0.0);
  float fuel = 0.52 + 0.48 * pow(fuelProfile, 0.7);

  vec2 scaledPoint = uv * vec2(iResolution.x / iResolution.y, 1.0)
    * max(uScale, 0.1);
  vec3 position = vec3(scaledPoint, 0.0) + vec3(1223.0, 6434.0, 8425.0);
  vec3 flow = vec3(
    4.1 * (0.5 - horizontal) * pow(inverseHeight, 4.0),
    -2.0 * fuel * pow(inverseHeight, 64.0),
    0.0
  );
  vec3 timing = time * vec3(0.0, -1.7, 1.1) + flow;
  vec3 displacementPoint = vec3(1.0, 0.5, 1.0) * 2.4 * position
    + time * vec3(0.01, -0.7, 1.3);
  vec2 displacementField = noisePair(displacementPoint, 2, 0.4);
  vec3 noisePoint = vec3(2.0, 1.0, 1.0) * position
    + timing
    + 0.4 * vec3(displacementField, 0.0);
  float noise = noiseStack(noisePoint, 3, 0.4);
  float flameShape = pow(max(clippedHeight, 0.0001), 0.3 * fuel)
    * pow(max(noise, 0.0001), 0.3 * fuel);
  float flame = heightFalloff * pow(1.0 - flameShape * flameShape * flameShape, 8.0);
  float flameCore = flame * flame * flame;
  vec3 fire = 1.5 * vec3(flame, flameCore, flameCore * flameCore);

  float smokeNoise = simplexNoise(0.4 * position + timing * vec3(1.0, 1.0, 0.2));
  vec3 smoke = vec3(
    0.3 * pow(fuel, 3.0) * pow(vertical, 2.0)
      * (0.5 + smokeNoise * 0.5 + 0.4 * (1.0 - noise))
  ) * heightFalloff;

  float sparkGridSize = max(14.0, iResolution.y / 24.0);
  vec2 sparkPoint = fragCoord - vec2(0.0, iResolution.y * 0.264 * time);
  sparkPoint -= 30.0 * noisePair(0.01 * vec3(sparkPoint, 30.0 * iTime), 1, 0.4);
  sparkPoint += 100.0 * flow.xy;
  if (mod(sparkPoint.y / sparkGridSize, 2.0) < 1.0) {
    sparkPoint.x += 0.5 * sparkGridSize;
  }

  vec2 sparkCell = floor(sparkPoint / sparkGridSize);
  float sparkRandom = randomValue(sparkCell);
  float sparkLife = min(
    10.0 * (
      1.0 - min(
        (sparkCell.y + iResolution.y * 0.264 * time / sparkGridSize)
          / (24.0 - 20.0 * sparkRandom),
        1.0
      )
    ),
    1.0
  );
  vec3 sparks = vec3(0.0);

  if (sparkLife > 0.0) {
    float sparkSize = fuel * fuel * sparkRandom * 0.08;
    float sparkAngle = 999.0 * sparkRandom * 6.28318530718 + 2.0 * iTime;
    vec2 sparkOrbit = vec2(sin(sparkAngle), cos(sparkAngle));
    vec2 sparkOffset = (0.5 - sparkSize) * sparkGridSize * sparkOrbit;
    vec2 sparkCellPoint = mod(sparkPoint + sparkOffset, sparkGridSize)
      - 0.5 * vec2(sparkGridSize);
    float sparkDistance = length(sparkCellPoint);
    float sparkValue = max(0.0, 1.0 - sparkDistance / max(sparkSize * sparkGridSize, 0.001));
    sparks = sparkLife * sparkValue * vec3(1.0, 0.3, 0.0);
  }

  vec3 effect = max(fire, sparks) + smoke;
  float effectLevel = clamp(max(effect.r, max(effect.g, effect.b)), 0.0, 1.0);
  float distortionMask = heightFalloff * fuel
    * clamp(0.2 + flame * 0.65 + smoke.r, 0.0, 1.0);
  vec2 displacement = displacementField - 0.5;
  displacement += vec2((noise - 0.5) * 0.35, flow.y * 0.03 - flame * 0.08);
  displacement *= uStrength * distortionMask;
  vec2 sampleUv = clamp(uv + displacement, vec2(0.002), vec2(0.998));

  if (iHasContent < 0.5) {
    fragColor = vec4(clamp(effect, 0.0, 1.0), effectLevel);
    return;
  }

  vec4 content = texture(iChannel0, sampleUv);
  float overlay = clamp(effectLevel * 0.72, 0.0, 0.86);
  vec3 shadedContent = content.rgb * (1.0 - smoke * 0.3);
  vec3 color = mix(shadedContent, clamp(effect, 0.0, 1.0), overlay);
  fragColor = vec4(clamp(color, 0.0, 1.0), max(content.a, overlay * 0.85));
}
`;

interface Props {
  autoPause?: boolean;
  class?: HTMLAttributes["class"];
  frameRate?: number;
  paused?: boolean;
  pixelRatio?: number;
  scale?: number;
  speed?: number;
  strength?: number;
}

const uniforms = computed(() => ({
  uScale: props.scale,
  uSpeed: props.speed,
  uStrength: props.strength,
}));
</script>

<template>
  <HtmlInCanvas
    :shader-code="shaderCode"
    :uniforms="uniforms"
    :auto-pause="props.autoPause"
    :frame-rate="props.frameRate"
    :interactive="false"
    :paused="props.paused"
    :pixel-ratio="props.pixelRatio"
    :class="props.class"
  >
    <slot />
  </HtmlInCanvas>
</template>
