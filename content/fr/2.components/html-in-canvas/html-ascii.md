---
title: HTML ASCII
description: Reconstruit le HTML en direct avec des glyphes bitmap adaptés à sa luminance.
category: HTML in Canvas
tags: [webgl, shader, canvas, ascii, typography]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlAsciiDemo.vue" config="HtmlAsciiConfig" componentId="html-ascii" :componentFiles='["HtmlAscii.vue"]'}

Appuyez sur la surface pour afficher les glyphes en monochrome.

#api

## API

| Prop         | Type      | Défaut  | Description                                              |
| ------------ | --------- | ------- | -------------------------------------------------------- |
| `cellSize`   | `number`  | `8`     | Taille d'une cellule. Toute valeur sous `5` utilise `5`. |
| `frameRate`  | `number`  | `60`    | Fréquence maximale de rendu.                             |
| `pixelRatio` | `number`  | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.           |
| `paused`     | `boolean` | `false` | Met la boucle de rendu en pause.                         |
| `autoPause`  | `boolean` | `true`  | Met en pause hors écran ou lorsque la page est masquée.  |
| `class`      | `string`  | —       | Classes supplémentaires fusionnées avec la surface.      |

### Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| `default` | Contenu HTML rendu à travers cet effet. |

#credits

- Technique de caractères bitmap adaptée de [movAX13h](https://www.shadertoy.com/user/movAX13h).

::
