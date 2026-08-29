---
title: HTML Chromatic
description: Sépare les canaux colorés du HTML en direct selon la position du pointeur.
category: HTML in Canvas
tags: [webgl, shader, canvas, chromatic, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlChromaticDemo.vue" config="HtmlChromaticConfig" componentId="html-chromatic" :componentFiles='["HtmlChromatic.vue"]'}

#api

## API

| Prop           | Type      | Défaut  | Description                                             |
| -------------- | --------- | ------- | ------------------------------------------------------- |
| `strength`     | `number`  | `0.03`  | Séparation maximale des canaux rouge et bleu.           |
| `mouseDamping` | `number`  | `0.9`   | Lissage appliqué au déplacement du pointeur.            |
| `frameRate`    | `number`  | `60`    | Fréquence maximale de rendu.                            |
| `pixelRatio`   | `number`  | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.          |
| `paused`       | `boolean` | `false` | Met la boucle de rendu en pause.                        |
| `autoPause`    | `boolean` | `true`  | Met en pause hors écran ou lorsque la page est masquée. |
| `class`        | `string`  | —       | Classes supplémentaires fusionnées avec la surface.     |

### Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| `default` | Contenu HTML rendu à travers cet effet. |

::
