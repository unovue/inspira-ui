---
title: Masque SVG
description: Un composant de masque SVG dynamique qui révèle le contenu au survol et aux mouvements de souris.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="SvgMaskDemo.vue" config="SvgMaskConfig" componentId="svg-mask" :componentFiles='["SVGMask.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                |
| ---------------- | -------- | ----------------- | ------------------------------------------ |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé. |
| `size`           | `number` | `10`              | Taille initiale du masque en pixels.       |
| `revealSize`     | `number` | `600`             | Taille du masque au survol, en pixels.     |

#credits

- Porté depuis [l'effet SVG Mask d'Aceternity UI](https://ui.aceternity.com/components/text-generate-effect).

::
