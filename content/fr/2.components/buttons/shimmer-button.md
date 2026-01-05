---
title: Bouton scintillant
description: Un bouton doté d'un effet de scintillement animé.
category: Button
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="ShimmerButtonDemo.vue" config="ShimmerButtonConfig" componentId="shimmer-button" :componentFiles='["ShimmerButton.vue"]'}

#api

## API

| Nom de propriété  | Type     | Valeur par défaut     | Description                                                  |
| ----------------- | -------- | --------------------- | ------------------------------------------------------------ |
| `class`           | `string` | `""`                  | Classes CSS supplémentaires à appliquer au bouton.           |
| `shimmerColor`    | `string` | `"#ffffff"`           | Couleur de l'effet scintillant.                              |
| `shimmerSize`     | `string` | `"0.05em"`            | Taille de l'effet scintillant.                               |
| `borderRadius`    | `string` | `"100px"`             | Rayon des coins du bouton.                                   |
| `shimmerDuration` | `string` | `"3s"`                | Durée de l'animation scintillante.                           |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"`  | Couleur de fond du bouton, en rgb ou en code hexadécimal.    |

#credits

- Porté depuis [Magic UI Shimmer Button](https://magicui.design/docs/components/shimmer-button).

::
