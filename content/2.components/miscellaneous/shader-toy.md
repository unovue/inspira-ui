---
title: Shader Toy Viewer
description: A powerful and flexible component to render interactive GLSL shaders from ShaderToy in the browser.
---

::ComponentLoader{label="Preview" componentName="ShaderToyDemo" type="examples" id="shader-toy"}
::

## API

| Prop Name    | Type                 | Default   | Description                                               |
| ------------ | -------------------- | --------- | --------------------------------------------------------- |
| `shaderCode` | `string`             | `-`       | GLSL fragment shader source code from ShaderToy.          |
| `mouseMode`  | `'click' \| 'hover'` | `'click'` | Mouse tracking mode: either on click or continuous hover. |
| `hue`        | `number`             | `0`       | Adjust the hue of the shader output.                      |
| `saturation` | `number`             | `1`       | Adjust the saturation of the shader output.               |
| `brightness` | `number`             | `1`       | Adjust the brightness of the shader output.               |
| `speed`      | `number`             | `1`       | Adjust the speed of the shader output.                    |
| `class`      | `string`             | `-`       | Custom classes to apply to the container.                 |

## Installation

Make sure to include and install `ogl` (for rendering) in your project.

::pm-install{name="ogl"}
::

## Install using CLI

::InstallationCli{componentId="shader-toy"}
::

## Install Manually

Copy and paste the following code:

::code-group
::CodeViewerTab{filename="ShaderToy.vue" language="vue" componentName="ShaderToy" type="ui" id="shader-toy"}
::
::CodeViewerTab{filename="InspiraShaderToy.ts" language="typescript" icon="vscode-icons:file-type-typescript" componentName="InspiraShaderToy" type="ui" id="shader-toy" extension="ts"}
::
::

## Features

- **Shadertoy-Compatible**: Supports Shadertoy-style `mainImage`, `iTime`, `iResolution`, `iMouse`, and more.
- **GLSL Shader Rendering**: Render full-featured ShaderToy-like fragment shaders.
- **iMouse Support**: Interactive shaders with real-time mouse input (click or hover).
- **HSV Color Control**: Dynamically adjust shader hue, saturation, and brightness.
- **Responsive Design**: Automatically adjusts canvas size with container resizing.
- **Runtime Control**: Play, pause, and reset shaders dynamically.

## Notes

- Converts and wraps Shadertoy-style shaders to work in a WebGL2 environment.
- Color control (`hue`, `saturation`, `brightness`) is applied as a post-processing step to simulate HSV adjustments.

## Credits

- Built with [OGL](https://github.com/oframe/ogl).
- Inspired by [Shadertoy](https://shadertoy.com/) and adapted for Vue compatibility.
