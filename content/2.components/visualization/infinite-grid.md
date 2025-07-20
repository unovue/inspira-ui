---
title: Infinite Grid
description: A high-performance, interactive 3D infinite grid component built with Vue 3 and TresJS (Three.js)
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="InfiniteGridDemo" type="examples" id="infinite-grid"}
::

::alert{type="info"}
**Note:** This component uses Three.js & requires `three` and `gsap` as dependencies.
::

## Install using CLI

::InstallationCli{componentId="infinite-grid"}
::

## Install Manually

#### Install the dependencies

::code-group

```bash [npm]
npm install three gsap
npm install -D @types/three
```

```bash [pnpm]
pnpm install three gsap
pnpm install -D @types/three
```

```bash [bun]
bun add three gsap
bun add -d @types/three
```

```bash [yarn]
yarn add three gsap
yarn add --dev @types/three
```

::

#### Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="InfiniteGrid.vue" language="vue" componentName="InfiniteGrid" type="ui" id="infinite-grid"}

:CodeViewerTab{filename="PostProcessShader.ts" language="typescript" componentName="PostProcessShader" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="InfiniteGridClass.ts" language="typescript" componentName="InfiniteGridClass" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="createTexture.ts" language="typescript" componentName="createTexture" type="ui" id="infinite-grid" extension="ts"}

```plaintext [gaussianBlurFragment.glsl]
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
```

```plaintext [gaussianBlurVertex.glsl]
// Corrected GLSL for the vertex shader
varying vec2 vUv; // <-- Declare varying BEFORE main

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv; // built-in attribute 'uv'
}
```

```plaintext [postProcessFragment.glsl]
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
```

```plaintext [postProcessVertex.glsl]
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

::

## API

| Prop Name  | Type                           | Default | Description                                                                   |
| ---------- | ------------------------------ | ------- | ----------------------------------------------------------------------------- |
| `cardData` | `CardData[]`                   | `[]`    | Data for every tile shown in the grid. **Required**.                          |
| `options`  | `Partial<InfiniteGridOptions>` | `{}`    | Optional overrides for layout, camera, and post-processing (see table below). |

### `InfiniteGridOptions`

| Option                                  | Type      | Default | Description                                         |
| --------------------------------------- | --------- | ------- | --------------------------------------------------- |
| `gridCols`                              | `number`  | `4`     | Grid Columns .                                      |
| `gridRows`                              | `number`  | `4`     | Grid Rows .                                         |
| `gridGap`                               | `number`  | `0`     | Gap between squares.                                |
| `tileSize`                              | `number`  | `2.4`   | Tile size (Three.js units).                         |
| `baseCameraZ`                           | `number`  | `10`    | Starting Z-distance of the camera.                  |
| `enablePostProcessing`                  | `boolean` | `true`  | Toggle the post-processing pipeline.                |
| `postProcessParams.distortionIntensity` | `number`  | `-0.2`  | Barrel / pincushion distortion strength (0 = none). |
| `postProcessParams.vignetteOffset`      | `number`  | `0.0`   | Vignette offset; higher ⇒ smaller clear area.       |
| `postProcessParams.vignetteDarkness`    | `number`  | `0.0`   | Vignette darkness; higher ⇒ darker edges.           |

---

### `CardData`

| Field         | Type       | Required | Description                                   |
| ------------- | ---------- | -------- | --------------------------------------------- |
| `title`       | `string`   | ✓        | Main heading text.                            |
| `badge`       | `string`   | ✓        | Badge label (render logic can be customised). |
| `description` | `string`   | –        | Longer body text.                             |
| `tags`        | `string[]` | ✓        | Tag pills rendered at the bottom.             |
| `date`        | `string`   | ✓        | Date string shown bottom-right.               |
| `image`       | `string`   | –        | URL for the tile’s background image.          |

---

## Emits

| Event Name    | Payload                             | Description                                                                                                             |
| ------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `tileClicked` | `{ card: CardData, index: number }` | Fired whenever a tile is clicked/tapped. The payload contains the clicked `CardData` object and its zero-based `index`. |

## Credits

- Special thanks to [Safak Dinc](https://github.com/safakdinc) for the idea and for granting permission to include it here. You can find the original repository at [infinite-grid](https://github.com/safakdinc/infinite-grid). Your contribution is greatly appreciated!
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
