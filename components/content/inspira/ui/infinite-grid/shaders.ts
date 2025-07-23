export const gaussianBlurFragmentShader = /* glsl */ `precision highp float;

uniform sampler2D map;
// uniform float blurAmount; // Removed: Blur amount is now fixed
uniform vec2 resolution;
uniform float uOpacity; // New uniform for controlling opacity from JS

varying vec2 vUv;

void main() {
    vec2 onePixel = vec2(1.0, 1.0) / resolution;

    // Fixed blur amount directly in the shader
    float fixedBlurAmount = 10.0; // Changed to a fixed value as requested

    vec4 sum = vec4(0.0);

    sum += texture2D(map, vUv + onePixel * vec2(-1.0, -1.0) * fixedBlurAmount) * 0.0625;
    sum += texture2D(map, vUv + onePixel * vec2( 0.0, -1.0) * fixedBlurAmount) * 0.125;
    sum += texture2D(map, vUv + onePixel * vec2( 1.0, -1.0) * fixedBlurAmount) * 0.0625;
    sum += texture2D(map, vUv + onePixel * vec2(-1.0,  0.0) * fixedBlurAmount) * 0.125;
    sum += texture2D(map, vUv + onePixel * vec2( 0.0,  0.0) * fixedBlurAmount) * 0.25;
    sum += texture2D(map, vUv + onePixel * vec2( 1.0,  0.0) * fixedBlurAmount) * 0.125;
    sum += texture2D(map, vUv + onePixel * vec2(-1.0,  1.0) * fixedBlurAmount) * 0.0625;
    sum += texture2D(map, vUv + onePixel * vec2( 0.0,  1.0) * fixedBlurAmount) * 0.125;
    sum += texture2D(map, vUv + onePixel * vec2( 1.0,  1.0) * fixedBlurAmount) * 0.0625;

    // Apply the opacity uniform to the alpha channel of the final color
    gl_FragColor = vec4(sum.rgb, sum.a * uOpacity); // sum.a is usually 1.0 from texture, so multiply by uOpacity
}`;

export const gaussianBlurVertexShader = `
  attribute vec2 uv;
  attribute vec3 position;
  
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  
  varying vec2 vUv;
  
  void main() {
    // Flip UV coordinates 180 degrees (both X and Y)
    vUv = vec2(uv.x, 1.0 - uv.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const postProcessFragmentShader = /* glsl */ `precision highp float;

uniform sampler2D tDiffuse;
uniform vec2 distortion;
uniform float vignetteOffset;
uniform float vignetteDarkness;

varying vec2 vUv;

void main() {
    vec2 shiftedUv = 2.0 * (vUv - 0.5);
    float distanceToCenter = length(shiftedUv);

    // Lens distortion effect
    // NOTE: The original shader had 'distortion * dot(shiftedUv)'.
    // If distortion is a vec2, dot product will result in a scalar.
    // If you intend distortion to scale both X and Y independently based on distance,
    // you might need something like: shiftedUv *= (0.88 + distortion.x * abs(shiftedUv.x) + distortion.y * abs(shiftedUv.y));
    // For now, I'll keep the dot product as it was in your provided shader,
    // which applies uniform distortion based on radial distance.
    shiftedUv *= (0.88 + distortion.x * dot(shiftedUv, shiftedUv)); // Assuming distortion.x controls the scalar distortion factor
    vec2 transformedUv = shiftedUv * 0.5 + 0.5;

    // Vignette effect
    // Corrected 'vignetteOffset * 0.799' and '(vignetteDarkness + vignetteOffset)' if that was the intent.
    // The second parameter to smoothstep is the "edge" where it starts.
    // I'll interpret your intent as scaling the effect based on a combined factor.
    float vignetteIntensity = smoothstep(vignetteOffset, vignetteDarkness, distanceToCenter); // Simplified as common vignette
    // If your original intention for vignette was 'smoothstep(0.8, vignetteOffset * 0.799, (vignetteDarkness + vignetteOffset) * distanceToCenter);'
    // this would be a more complex interaction. Let's start with a standard vignette.

    // Sample render texture and output fragment
    vec3 color = texture2D(tDiffuse, transformedUv).rgb * (1.0 - vignetteIntensity); // Apply darkening based on intensity
    // The original '* vignetteIntensity' would brighten. Vignettes usually darken.
    // If you want a more subtle darkening, adjust the '(1.0 - vignetteIntensity)''.
    gl_FragColor = vec4(color, 1.);
}`;

export const postProcessVertexShader = /* glsl */ `
attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
