---
title: Vitesse lumière
description: Un effet visuel de route 3D hautement personnalisable construit avec Three.js, incluant route animée, voitures, lumières et distorsions pour une simulation immersive du mouvement.
category: Visualisation
tags: [css, tailwind, threejs, codrops]
---

::ComponentViewer{demoFile="LightSpeedDemo.vue" config="LightSpeedConfig" componentId="light-speed" :componentFiles='["LightSpeed.vue", "LightSpeedApp.ts", "presets.ts", "shaders.ts"]' dependencies="three postprocessing"}

#api

## API

| Nom de propriété | Type                         | Valeur par défaut      | Description                                                                    |
| ---------------- | ---------------------------- | ---------------------- | ------------------------------------------------------------------------------ |
| `effectOptions`  | `Partial<LightSpeedOptions>` | Voir `defaultOptions`  | Objet de configuration pour personnaliser la route, les lumières, la distorsion, la vitesse et les couleurs. |

#credits

- Porté vers Vue depuis [l'article Codrops](https://tympanus.net/codrops/2019/11/13/high-speed-light-trails-in-three-js/)

::
