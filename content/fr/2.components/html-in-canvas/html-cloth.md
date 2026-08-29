---
title: HTML Cloth
description: Plie le HTML en direct dans un champ vectoriel animé qui évoque un tissu.
category: HTML in Canvas
tags: [webgl, shader, canvas, cloth, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlClothDemo.vue" config="HtmlClothConfig" componentId="html-cloth" :componentFiles='["HtmlCloth.vue"]'}

#api

## API

| Prop         | Type      | Défaut  | Description                                             |
| ------------ | --------- | ------- | ------------------------------------------------------- |
| `strength`   | `number`  | `0.03`  | Intensité du déplacement vectoriel.                     |
| `scale`      | `number`  | `6`     | Échelle du champ de tissu.                              |
| `speed`      | `number`  | `1`     | Vitesse d'animation du champ.                           |
| `frameRate`  | `number`  | `60`    | Fréquence maximale de rendu.                            |
| `pixelRatio` | `number`  | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.          |
| `paused`     | `boolean` | `false` | Met la boucle de rendu en pause.                        |
| `autoPause`  | `boolean` | `true`  | Met en pause hors écran ou lorsque la page est masquée. |
| `class`      | `string`  | —       | Classes supplémentaires fusionnées avec la surface.     |

### Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| `default` | Contenu HTML rendu à travers cet effet. |

#credits

- Champ vectoriel basé sur le travail de [MartinRGB](https://www.shadertoy.com/view/DttSRB).

::
