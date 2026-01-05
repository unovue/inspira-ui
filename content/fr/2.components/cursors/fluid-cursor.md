---
title: Curseur fluide
description: Une traînée de curseur animée, accélérée par GPU, qui simule un mouvement fluide.
category: Cursor
tags: [css, tailwind, cursor, webgl, cursify]
---

::ComponentViewer{demoFile="FluidCursorDemo.vue" config="FluidCursorConfig" componentId="fluid-cursor" :componentFiles='["FluidCursor.vue"]'}

#api

## API

| Nom de propriété        | Type      | Valeur par défaut          | Description                                                                          |
| ----------------------- | --------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `simResolution`         | `number`  | `128`                      | Résolution de la grille de simulation, influe sur le niveau de détail et les performances. |
| `dyeResolution`         | `number`  | `1440`                     | Résolution de la texture de couleur (dye) du fluide.                                |
| `captureResolution`     | `number`  | `512`                      | Résolution pour la capture des événements d'entrée.                                 |
| `densityDissipation`    | `number`  | `3.5`                      | Taux de dissipation de la densité de couleur au fil du temps.                       |
| `velocityDissipation`   | `number`  | `2`                        | Taux de dissipation de la vélocité, influence la persistance du mouvement du fluide. |
| `pressure`              | `number`  | `0.1`                      | Facteur de pression utilisé dans les calculs de physique du fluide.                 |
| `pressureIterations`    | `number`  | `20`                       | Nombre d'itérations pour l'exactitude du solveur de pression.                       |
| `curl`                  | `number`  | `3`                        | Intensité de l'effet de tourbillon/vorticité pour renforcer les mouvements rotatifs. |
| `splatRadius`           | `number`  | `0.2`                      | Rayon de l'effet de projection du pointeur dans le fluide.                          |
| `splatForce`            | `number`  | `6000`                     | Force appliquée par le pointeur lors de l'interaction avec le fluide.               |
| `shading`               | `boolean` | `true`                     | Active ou désactive les effets d'ombrage pour la profondeur et la lumière.          |
| `colorUpdateSpeed`      | `number`  | `10`                       | Vitesse de mise à jour dynamique des couleurs du pointeur.                          |
| `backColor`             | `object`  | `{ r: 0.5, g: 0, b: 0 }`   | Couleur de fond du fluide au format RGB.                                            |
| `transparent`           | `boolean` | `true`                     | Indique si le fond du canvas est transparent.                                       |
| `class`                 | `string`  | `undefined`                | Classes CSS supplémentaires pour la div conteneur externe.                          |

#credits

- Inspiré du [Fluid Cursor de Cursify](https://cursify.vercel.app/components/fluid-cursor)
- Utilise un contexte WebGL 1/2 et des shaders GLSL personnalisés pour la physique et le rendu du fluide.

::
