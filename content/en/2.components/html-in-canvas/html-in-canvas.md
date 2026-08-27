---
title: HTML in Canvas
description: Apply a ShaderToy-style fragment shader to live HTML content through the experimental HTML-in-Canvas API.
category: HTML in Canvas
tags: [webgl, shader, canvas, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlInCanvasDemo.vue" config="HtmlInCanvasConfig" componentId="html-in-canvas" :componentFiles='["HtmlInCanvas.vue", "HtmlInCanvasRenderer.ts", "captureElement.ts", "presets.ts", "index.ts"]'}

HTML in Canvas is an experimental browser API. When it is unavailable, the component captures a styled DOM snapshot and passes it through the same WebGL shader. The original DOM remains available for interaction and accessibility.

Your fragment shader must define `mainImage(out vec4 fragColor, in vec2 fragCoord)`. The captured HTML is available through `iChannel0`.

`htmlInCanvasShaders` includes autonomous `liquid`, `cloth`, and `blaze` presets. They can be passed directly to `shaderCode` or used as references for custom displacement shaders.

#api

## API

| Prop           | Type             | Default | Description                                                        |
| -------------- | ---------------- | ------- | ------------------------------------------------------------------ |
| `shaderCode`   | `string`         | —       | Fragment shader body containing a `mainImage` function.            |
| `uniforms`     | `ShaderUniforms` | `{}`    | Custom numeric, boolean, vector, or matrix uniforms.               |
| `frameRate`    | `number`         | `60`    | Maximum render frequency.                                          |
| `pixelRatio`   | `number`         | `1`     | Render scale, clamped between `0.25` and `2`.                      |
| `speed`        | `number`         | `1`     | Multiplier applied to `iTime`.                                     |
| `mouseDamping` | `number`         | `0.85`  | Smoothing applied to pointer movement.                             |
| `paused`       | `boolean`        | `false` | Pause the render loop.                                             |
| `autoPause`    | `boolean`        | `true`  | Pause while the component is off-screen or the document is hidden. |
| `interactive`  | `boolean`        | `true`  | Track pointer input for `iMouse`.                                  |
| `class`        | `string`         | —       | Additional classes merged onto the root element.                   |

### Shader inputs

`iResolution`, `iTime`, `iTimeDelta`, `iFrameRate`, `iFrame`, `iMouse`, `iDate`, `iHasContent`, `iChannel0`, and `iChannelResolution` follow ShaderToy conventions. `iPointerVelocity`, `iPointerEnergy`, and `iPointerAge` provide a damped pointer impulse for effects that should settle after movement. `iHasContent` is `1` when the HTML texture is available.

### Events

| Event     | Payload   | Description                                         |
| --------- | --------- | --------------------------------------------------- |
| `ready`   | —         | Emitted after the first HTML texture is rendered.   |
| `error`   | `string`  | Emitted when shader compilation or rendering fails. |
| `support` | `boolean` | Reports native HTML-in-Canvas availability.         |

### Slots

| Slot      | Description                                  |
| --------- | -------------------------------------------- |
| `default` | HTML content captured as the shader texture. |

#credits

- Built against the [WICG HTML-in-Canvas proposal](https://github.com/WICG/html-in-canvas).
- Cloth preset based on the vector field by [MartinRGB](https://www.shadertoy.com/view/DttSRB).
- Blaze preset uses the MIT-licensed simplex noise implementation by [Ashima Arts](https://github.com/ashima/webgl-noise).

::
