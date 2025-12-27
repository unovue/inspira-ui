---
title: Curseur à ruban
description: Une traînée de curseur en ruban coloré et fluide rendue en WebGL avec OGL, dotée de shaders dynamiques et d'effets d'animation personnalisables.
category: Curseur
tags: [css, tailwind, cursor, webgl, codrops]
---

::ComponentViewer{demoFile="TailedCursorDemo.vue" config="TailedCursorConfig" componentId="tailed-cursor" :componentFiles='["TailedCursor.vue"]' dependencies="ogl"}

#api

## API

| Nom de propriété      | Type       | Valeur par défaut                            | Description                                                      |
| --------------------- | ---------- | -------------------------------------------- | ---------------------------------------------------------------- |
| `colors`              | `string[]` | `["#ff9346", "#7cff67", "#ffee51", "#00d8ff"]` | Tableau des couleurs pour chaque ruban.                          |
| `baseSpring`          | `number`   | `0.03`                                       | Force du ressort pour la réactivité du mouvement de la traînée. |
| `baseFriction`        | `number`   | `0.9`                                        | Facteur de friction ralentissant le mouvement de la traînée.     |
| `baseThickness`       | `number`   | `30`                                         | Épaisseur de base des rubans.                                    |
| `offsetFactor`        | `number`   | `0.05`                                       | Facteur de décalage horizontal entre chaque ligne de ruban.      |
| `maxAge`              | `number`   | `500`                                        | Âge maximal des segments de traînée contrôlant leur atténuation. |
| `pointCount`          | `number`   | `50`                                         | Nombre de points composant chaque ruban.                         |
| `speedMultiplier`     | `number`   | `0.6`                                        | Multiplicateur de vitesse contrôlant la rapidité de l'animation. |
| `enableFade`          | `boolean`  | `false`                                      | Active l'effet de fondu sur les bords du ruban.                  |
| `enableShaderEffect`  | `boolean`  | `false`                                      | Active l'effet de vague via shader sur les rubans.               |
| `effectAmplitude`     | `number`   | `2`                                          | Amplitude de l'effet de vague du shader lorsqu'il est activé.    |
| `backgroundColor`     | `number[]` | `[0, 0, 0, 0]`                               | Couleur de fond (RGBA) pour l'effacement du canvas WebGL.        |

#credits

- Construit avec [OGL](https://github.com/oframe/ogl), un framework WebGL léger.
- Inspiré par [l'article Codrops](https://tympanus.net/codrops/2019/09/24/crafting-stylised-mouse-trails-with-ogl/)

::
