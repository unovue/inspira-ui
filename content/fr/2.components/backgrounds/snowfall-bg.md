---
title: Fond chute de neige
description: Un magnifique effet de chute de neige animé appliqué en arrière-plan.
category: Arrière-plan
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SnowfallBgDemo.vue" config="SnowfallBgConfig" componentId="snowfall-bg" :componentFiles='["SnowfallBg.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                               |
| ---------------- | -------- | ----------------- | --------------------------------------------------------- |
| `color`          | `string` | `#FFF`            | Couleur des flocons au format hexadécimal.                |
| `quantity`       | `number` | `100`             | Nombre de flocons à afficher.                             |
| `speed`          | `number` | `1`               | Vitesse de chute des flocons.                             |
| `maxRadius`      | `number` | `3`               | Rayon maximal des flocons.                                |
| `minRadius`      | `number` | `1`               | Rayon minimal des flocons.                                |
| `class`          | `string` | `null`            | Classes CSS supplémentaires à appliquer au conteneur.     |

#credits

- Inspiré par les effets naturels de chute de neige.

::
