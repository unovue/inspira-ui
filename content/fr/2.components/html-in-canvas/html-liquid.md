---
title: HTML Liquid
description: Réfracte le HTML en direct à travers une surface liquide qui réagit au pointeur.
category: HTML in Canvas
tags: [webgl, shader, canvas, liquid, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlLiquidDemo.vue" config="HtmlLiquidConfig" componentId="html-liquid" :componentFiles='["HtmlLiquid.vue"]'}

#api

## API

| Prop           | Type      | Défaut  | Description                                                  |
| -------------- | --------- | ------- | ------------------------------------------------------------ |
| `strength`     | `number`  | `0.03`  | Intensité du déplacement de la texture.                      |
| `frequency`    | `number`  | `18`    | Densité de la surface fluide et des ondulations du pointeur. |
| `speed`        | `number`  | `3`     | Vitesse du champ liquide.                                    |
| `mouseDamping` | `number`  | `0.9`   | Lissage appliqué au déplacement du pointeur.                 |
| `frameRate`    | `number`  | `60`    | Fréquence maximale de rendu.                                 |
| `pixelRatio`   | `number`  | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.               |
| `paused`       | `boolean` | `false` | Met la boucle de rendu en pause.                             |
| `autoPause`    | `boolean` | `true`  | Met en pause hors écran ou lorsque la page est masquée.      |
| `class`        | `string`  | —       | Classes supplémentaires fusionnées avec la surface.          |

### Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| `default` | Contenu HTML rendu à travers cet effet. |

::
