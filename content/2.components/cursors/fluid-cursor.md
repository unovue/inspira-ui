---
title: Fluid Cursor
description: A GPU-accelerated animated cursor trail that simulates fluid motion.
---

::ComponentLoader{label="Preview" componentName="FluidCursorDemo" type="examples" id="fluid-cursor"}
::

## API

| Prop Name             | Type      | Default                  | Description                                                                        |
| --------------------- | --------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `simResolution`       | `number`  | `128`                    | Resolution for the simulation grid affecting fluid detail and performance.         |
| `dyeResolution`       | `number`  | `1440`                   | Resolution for the fluid dye (color) texture.                                      |
| `captureResolution`   | `number`  | `512`                    | Resolution for capturing input events.                                             |
| `densityDissipation`  | `number`  | `3.5`                    | Rate at which color density dissipates over time.                                  |
| `velocityDissipation` | `number`  | `2`                      | Rate at which velocity dissipates over time, affecting fluid momentum persistence. |
| `pressure`            | `number`  | `0.1`                    | Pressure factor used in fluid physics calculations.                                |
| `pressureIterations`  | `number`  | `20`                     | Number of iterations for pressure solver accuracy.                                 |
| `curl`                | `number`  | `3`                      | Intensity of curl/vorticity effect to enhance swirling motions.                    |
| `splatRadius`         | `number`  | `0.2`                    | Radius of the pointer's splat effect in the fluid.                                 |
| `splatForce`          | `number`  | `6000`                   | Force applied by the pointer to the fluid on interaction.                          |
| `shading`             | `boolean` | `true`                   | Enable or disable shading effects for depth and light on fluid colors.             |
| `colorUpdateSpeed`    | `number`  | `10`                     | Speed at which pointer colors update dynamically.                                  |
| `backColor`           | `object`  | `{ r: 0.5, g: 0, b: 0 }` | Background color of the fluid in RGB format.                                       |
| `transparent`         | `boolean` | `true`                   | Whether the canvas background is transparent.                                      |
| `class`               | `string`  | `undefined`              | Additional CSS classes for the outer container div.                                |

## Install using CLI

::InstallationCli{componentId="fluid-cursor"}
::

## Install Manually

Copy and paste the following code:

::CodeViewer{filename="FluidCursor.vue" language="vue" componentName="FluidCursor" type="ui" id="fluid-cursor"}
::

## Features

- **GPU-powered fluid simulation**: Smooth and performant fluid dynamics using WebGL shaders.
- **Pointer interaction**: Fluid responds dynamically to mouse and touch input with colorful splats.
- **Customizable physics**: Adjustable simulation resolution, pressure, curl, and dissipation parameters.
- **Shading effects**: Optional lighting/shading for enhanced 3D fluid appearance.
- **Responsive canvas**: Automatically resizes and adapts to device pixel ratio for crisp visuals.
- **Background control**: Support for transparent or solid colored backgrounds.

## Credits

- Inspired from [Fluid Cursor by Cursify](https://cursify.vercel.app/components/fluid-cursor)
- Utilizes WebGL 1/2 context and custom GLSL shaders for fluid physics and rendering.
