precision highp float;

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
}