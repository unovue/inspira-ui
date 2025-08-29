---
title: Light Speed
description: A highly customizable 3D highway speed visual effect built with Three.js, featuring animated road, cars, lights, and distortion effects for immersive motion simulation.
---

::ComponentLoader{label="Preview" componentName="LightSpeedDemo" type="examples" id="light-speed"}
::

## API

| Prop Name       | Type                         | Default              | Description                                                                    |
| --------------- | ---------------------------- | -------------------- | ------------------------------------------------------------------------------ |
| `effectOptions` | `Partial<LightSpeedOptions>` | See `defaultOptions` | Configuration object to customize road, lights, distortion, speed, and colors. |

## Preset Descriptions

- **Preset One**: Deep red hyperspeed lights — uses `deepDistortion`, aggressive burst effect.
- **Preset Two**: Subtle zigzag distortion — `turbulentDistortion` with classic highway streaks.
- **Preset Three**: Wider roads with center island — `LongRaceDistortion` for long horizontal waves.
- **Preset Four**: Smooth xy wobble effect — good for elegant or luxury brand use.
- **Preset Five**: Mountain-like terrain distortion with glowing ambient vibes.
- **Preset Six**: Minimal streaks — soft turbulence for background moods.

## Installation

Requires `three` and `postprocessing` libraries for advanced rendering effects.

::pm-install{name="three postprocessing"}
::

## Install using CLI

::InstallationCli{componentId="light-speed"}
::

## Install Manually

Copy and paste the following code:

::code-group
::CodeViewerTab{filename="LightSpeed.vue" language="vue" componentName="LightSpeed" type="ui" id="light-speed"}
::
::CodeViewerTab{filename="LightSpeedApp.ts" language="typescript" icon="vscode-icons:file-type-typescript" componentName="LightSpeedApp" type="ui" id="light-speed" extension="ts"}
::
::CodeViewerTab{filename="presets.ts" language="typescript" icon="vscode-icons:file-type-typescript" componentName="presets" type="ui" id="light-speed" extension="ts"}
::
::CodeViewerTab{filename="shaders.ts" language="typescript" icon="vscode-icons:file-type-typescript" componentName="shaders" type="ui" id="light-speed" extension="ts"}
::
::

## Features

- **Realistic highway simulation**: 3D road with lanes, shoulder, and island rendered with custom shaders.
- **Dynamic car lights**: Animated left and right car light strips with fading and color variations.
- **Multiple distortion presets**: Various distortion effects to simulate road vibrations and speed sensations.
- **Camera FOV and speed control**: Smooth zoom and speed-up interactions on mouse/touch events.
- **Postprocessing effects**: Bloom and SMAA anti-aliasing for high-quality visuals.
- **Highly customizable**: Configure lanes, road width, colors, speeds, light properties, and more via options.
- **Responsive design**: Auto-resizes on window change for consistent rendering quality.

## Tips

- Combine with dark background & full viewport for immersive results.
- Add a CTA or logo overlay with fixed position elements to center attention.

## Credits

- Ported to Vue from [Codrops Article](https://tympanus.net/codrops/2019/11/13/high-speed-light-trails-in-three-js/)
