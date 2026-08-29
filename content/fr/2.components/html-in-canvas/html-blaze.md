---
title: HTML Blaze
description: Déforme le HTML en direct avec de la chaleur, de la fumée, des étincelles et une lumière de flamme.
category: HTML in Canvas
tags: [webgl, shader, canvas, fire, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlBlazeDemo.vue" config="HtmlBlazeConfig" componentId="html-blaze" :componentFiles='["HtmlBlaze.vue"]'}

#api

## API

| Prop         | Type      | Défaut  | Description                                             |
| ------------ | --------- | ------- | ------------------------------------------------------- |
| `strength`   | `number`  | `0.03`  | Intensité du déplacement thermique.                     |
| `scale`      | `number`  | `6`     | Échelle du champ de bruit des flammes.                  |
| `speed`      | `number`  | `1`     | Vitesse d'animation du feu.                             |
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

- Utilise l'implémentation Simplex Noise sous licence MIT d'[Ashima Arts](https://github.com/ashima/webgl-noise).

::
