uniform sampler2D tDiffuse;
uniform vec2 distortion;
uniform float vignetteOffset;
uniform float vignetteDarkness;

varying vec2 vUv;

// convert uv range from 0 -> 1 to -1 -> 1
vec2 getShiftedUv(vec2 uv) {
    return 2. * (uv - .5);
}

// convert uv range from -1 -> 1 to 0 -> 1
vec2 getUnshiftedUv(vec2 shiftedUv) {
    return shiftedUv * 0.5 + 0.5;
}


void main() {
    vec2 shiftedUv = getShiftedUv(vUv);
    float distanceToCenter = length(shiftedUv);

    // Lens distortion effect
    // NOTE: The original shader had 'distortion * dot(shiftedUv)'.
    // If distortion is a vec2, dot product will result in a scalar.
    // If you intend distortion to scale both X and Y independently based on distance,
    // you might need something like: shiftedUv *= (0.88 + distortion.x * abs(shiftedUv.x) + distortion.y * abs(shiftedUv.y));
    // For now, I'll keep the dot product as it was in your provided shader,
    // which applies uniform distortion based on radial distance.
    shiftedUv *= (0.88 + distortion.x * dot(shiftedUv, shiftedUv)); // Assuming distortion.x controls the scalar distortion factor
    vec2 transformedUv = getUnshiftedUv(shiftedUv);

    // Vignette effect
    // Corrected `vignetteOffset * 0.799` and `(vignetteDarkness + vignetteOffset)` if that was the intent.
    // The second parameter to smoothstep is the "edge" where it starts.
    // I'll interpret your intent as scaling the effect based on a combined factor.
    float vignetteIntensity = smoothstep(vignetteOffset, vignetteDarkness, distanceToCenter); // Simplified as common vignette
    // If your original intention for vignette was `smoothstep(0.8, vignetteOffset * 0.799, (vignetteDarkness + vignetteOffset) * distanceToCenter);`
    // this would be a more complex interaction. Let's start with a standard vignette.

    // Sample render texture and output fragment
    vec3 color = texture2D( tDiffuse, transformedUv ).rgb * (1.0 - vignetteIntensity); // Apply darkening based on intensity
    // The original `* vignetteIntensity` would brighten. Vignettes usually darken.
    // If you want a more subtle darkening, adjust the `(1.0 - vignetteIntensity)`.
    gl_FragColor = vec4(color, 1.);
}