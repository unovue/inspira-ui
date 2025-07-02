---
title: Liquid Background
description: A reactive and dynamic background effect using OGL for WebGL-based visuals.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="LiquidBackgroundDemo" type="examples" id="liquid-background"}
::

## API

This component does not require external props to function, as it dynamically renders the liquid background effect on mount.

::alert{type="info"}
**Note:** This component uses OGL Web Renderer & requires `ogl` npm package as a dependency.
::

## Install using CLI

::InstallationCli{componentId="liquid-background"}
::

## Install Manually

You can copy and paste the following code to create this component:

::code-group

::CodeViewerTab{label="LiquidBackground.vue" language="vue" componentName="LiquidBackground" type="ui" id="liquid-background"}
::

::

## Features

- **WebGL Rendering**: Utilizes the OGL library to provide hardware-accelerated background effects.
- **Animated Shader**: Runs a custom fragment and vertex shader to generate a liquid-like visual animation.
- **Automatic Resizing**: Listens to window resize events and adjusts the canvas dimensions accordingly.
- **Clean Resource Management**: Disposes of the WebGL context and removes event listeners upon unmount, preventing memory leaks.

## Implementation Details

1. **OGL Renderer**: Creates a renderer with `new Renderer()` and appends the associated `canvas` to the DOM.
2. **Shader Programs**: Defines vertex (`vert`) and fragment (`frag`) shaders, where the fragment shader implements the liquid animation logic.
3. **Triangle Geometry**: Uses OGL’s built-in `Triangle` geometry for a full-screen quad.
4. **Uniforms**:
   - `uTime`: Updated each frame to animate the shader.
   - `uResolution`: Adjusted on window resize to maintain consistent visuals.
   - `uColor`: An example color uniform (slightly purple) used in the shader.
5. **Animation Loop**: Schedules updates via `requestAnimationFrame`, updates `uTime`, and renders the scene.

## Credits

- Built with the [OGL](https://github.com/oframe/ogl) library for 3D rendering.
- Inspired by generative art patterns.
- Uses Vue's Composition API for lifecycle and state management.
