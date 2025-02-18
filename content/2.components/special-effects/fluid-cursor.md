---
title: Fluid Cursor
description: A high-performance WebGL-based fluid cursor component using custom shaders and WebGL rendering for dynamic and interactive fluid effects.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="FluidCursorDemo" type="examples" id="fluid-cursor"}
::

## API

| Prop Name             | Type      | Default                  | Description                                                |
| --------------------- | --------- | ------------------------ | ---------------------------------------------------------- |
| `simResolution`       | `number`  | `128`                    | Resolution for the fluid simulation grid.                  |
| `dyeResolution`       | `number`  | `1440`                   | Resolution for the dye (color) grid.                       |
| `captureResolution`   | `number`  | `512`                    | Resolution for capturing the simulation frame.             |
| `densityDissipation`  | `number`  | `3.5`                    | Controls how quickly dye fades over time.                  |
| `velocityDissipation` | `number`  | `2`                      | Controls how quickly velocity dissipates.                  |
| `pressure`            | `number`  | `0.1`                    | Pressure factor for fluid calculations.                    |
| `pressureIterations`  | `number`  | `20`                     | Number of iterations for pressure solver.                  |
| `curl`                | `number`  | `3`                      | Strength of vorticity confinement.                         |
| `splatRadius`         | `number`  | `0.2`                    | Radius of the splat effect when interacting with fluid.    |
| `splatForce`          | `number`  | `6000`                   | Strength of the splat effect when interacting with fluid.  |
| `shading`             | `boolean` | `true`                   | Enables or disables shading for realistic lighting.        |
| `colorUpdateSpeed`    | `number`  | `10`                     | Speed of color updates in the simulation.                  |
| `backColor`           | `object`  | `{ r: 0.5, g: 0, b: 0 }` | Background color of the fluid simulation.                  |
| `transparent`         | `boolean` | `true`                   | Whether the fluid simulation has a transparent background. |

## Component Code

You can copy and paste the following code to create this component:

::code-group

    ::CodeViewerTab{label="FluidCursor.vue" language="vue" componentName="FluidCursor" type="ui" id="fluid-cursor"}
    ::

::

## Features

- **WebGL-Based Simulation**: Uses WebGL for high-performance real-time fluid rendering.
- **Interactive Fluid Dynamics**: Supports touch and mouse input to create fluid interactions.
- **Custom Shader Effects**: Implements a set of shaders for realistic fluid behavior.
- **Fully Configurable**: Allows tweaking of simulation parameters like resolution, pressure, and dissipation.
- **Supports Transparency**: Option to enable or disable transparent backgrounds.
- **Optimized for Performance**: Efficiently utilizes WebGL rendering techniques.

## Credits

- Built using WebGL with custom shaders for real-time fluid simulation.
- Ported from [reactbit.dev Splash Cursor](https://www.reactbits.dev/animations/splash-cursor).
