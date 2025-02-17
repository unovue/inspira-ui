---
title: Splash Cursor
description: Colorful mouse over effect
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="SplashCursorDemo" type="examples" id="splash-cursor"}  
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## API

| Prop Name           | Type      | Default                  | Description                                                                  |
| ------------------- | --------- | ------------------------ | ---------------------------------------------------------------------------- |
| simResolution       | `number`  | —                        | Fluid simulation resolution for velocity fields.                             |
| dyeResolution       | `number`  | —                        | Resolution of the color/dye texture.                                         |
| captureResolution   | `number`  | —                        | Resolution used for certain capture operations (rarely changed).             |
| densityDissipation  | `number`  | —                        | Rate at which color/density dissipates over time.                            |
| velocityDissipation | `number`  | —                        | Rate at which velocity dissipates over time.                                 |
| pressure            | `number`  | —                        | Base pressure for the fluid simulation.                                      |
| pressureIterations  | `number`  | —                        | Number of Jacobi iterations used for the pressure solver.                    |
| curl                | `number`  | —                        | Amount of vorticity/curl to apply for swirling effects.                      |
| splatRadius         | `number`  | —                        | Radius of the 'splat' effect when user interacts.                            |
| splatForce          | `number`  | —                        | Force of the fluid 'splat' on each interaction.                              |
| shading             | `boolean` | —                        | Toggles simple lighting/shading on the fluid.                                |
| colorUpdateSpeed    | `number`  | —                        | Frequency at which pointer colors are re-randomized.                         |
| backColor           | `object`  | `{ r: 0.5, g: 0, b: 0 }` | Base background color for the fluid. Not always used if TRANSPARENT is true. |
| transparent         | `boolean` | —                        | Determines if the canvas background should be rendered with alpha.           |

## Component Code

You can copy and paste the following code to create this component:

::code-group
::CodeViewerTab{filename="SplashCursor.vue" language="vue" componentName="SplashCursor" type="ui" id="splash-cursor"}
::
::

## Credits

- Inspired by [reactbits](https://www.reactbits.dev/animations/splash-cursor).
- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
