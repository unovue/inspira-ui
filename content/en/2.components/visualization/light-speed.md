---
title: Light Speed
description: A highly customizable 3D highway speed visual effect built with Three.js, featuring animated road, cars, lights, and distortion effects for immersive motion simulation.
category: Visualization
tags: [css, tailwind, threejs, codrops]
---

::ComponentViewer{demoFile="LightSpeedDemo.vue" config="LightSpeedConfig" componentId="light-speed" :componentFiles='["LightSpeed.vue", "LightSpeedApp.ts", "presets.ts", "shaders.ts"]' dependencies="three postprocessing"}

#api

## API

| Prop Name       | Type                         | Default              | Description                                                                    |
| --------------- | ---------------------------- | -------------------- | ------------------------------------------------------------------------------ |
| `effectOptions` | `Partial<LightSpeedOptions>` | See `defaultOptions` | Configuration object to customize road, lights, distortion, speed, and colors. |

#credits

- Ported to Vue from [Codrops Article](https://tympanus.net/codrops/2019/11/13/high-speed-light-trails-in-three-js/)

::
