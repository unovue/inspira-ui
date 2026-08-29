---
title: HTML Drag
description: Courbe le HTML en direct selon la vitesse du défilement et le déplacement du pointeur pressé.
category: HTML in Canvas
tags: [webgl, shader, canvas, scroll, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlDragDemo.vue" config="HtmlDragConfig" componentId="html-drag" :componentFiles='["HtmlDrag.vue"]'}

Faites défiler la surface pour courber son plan WebGL segmenté. Activez `mouseEnabled` pour ajouter la déformation au glisser ; laissez-le désactivé pour conserver la sélection du HTML.

#api

## API

| Prop           | Type      | Défaut  | Description                                              |
| -------------- | --------- | ------- | -------------------------------------------------------- |
| `strength`     | `number`  | `1.25`  | Intensité de la courbure verticale.                      |
| `mouseDamping` | `number`  | `0.9`   | Lissage appliqué au déplacement du pointeur.             |
| `mouseEnabled` | `boolean` | `false` | Active la déformation au glisser et bloque la sélection. |
| `frameRate`    | `number`  | `60`    | Fréquence maximale de rendu.                             |
| `pixelRatio`   | `number`  | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.           |
| `paused`       | `boolean` | `false` | Met la boucle de rendu en pause.                         |
| `autoPause`    | `boolean` | `true`  | Met en pause hors écran ou lorsque la page est masquée.  |
| `class`        | `string`  | —       | Classes supplémentaires fusionnées avec la surface.      |

### Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| `default` | Contenu HTML rendu à travers cet effet. |

::
