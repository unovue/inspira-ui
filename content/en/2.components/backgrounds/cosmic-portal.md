---
title: Cosmic Portal
description: A breathtaking, animated 3D portal built with Three.js that features glowing rings, floating crystals, space distortion, and interdimensional streams.
category: Background
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="CosmicPortalDemo.vue" config="CosmicPortalConfig" componentId="cosmic-portal" :componentFiles='["CosmicPortal.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| Prop Name          | Type     | Default   | Description                                                 |
| ------------------ | -------- | --------- | ----------------------------------------------------------- |
| `portalComplexity` | `number` | `4`       | Controls the complexity of the portal effects and geometry. |
| `crystalCount`     | `number` | `12`      | Number of floating crystals in the scene.                   |
| `primaryColor`     | `string` | `#9b59b6` | Main color for portal and background glow.                  |
| `secondaryColor`   | `string` | `#3498db` | Secondary color for blending and glow.                      |
| `accentColor`      | `string` | `#e74c3c` | Color used for portal energy and highlight.                 |
| `vortexColor`      | `string` | `#2ecc71` | Color used for swirling vortex and dimensional streams.     |
| `rotationSpeed`    | `number` | `0.3`     | Speed at which objects rotate.                              |
| `bloomStrength`    | `number` | `1.2`     | Intensity of bloom postprocessing.                          |
| `bloomRadius`      | `number` | `0.7`     | Radius of the bloom effect.                                 |
| `bloomThreshold`   | `number` | `0.2`     | Threshold for bloom visibility.                             |
| `dimensionShift`   | `number` | `4`       | Level of dimension distortion for shader animation.         |

#credits

- Inspired and ported from [Dimensional Portal by Techartist](https://x.com/techartist_).

::
