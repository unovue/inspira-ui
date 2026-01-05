---
title: Révélation en boîte
description: Un effet d'apparition animé avec boîte colorée, aux couleurs, durée et délai personnalisables.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BoxRevealDemo.vue" config="BoxRevealConfig" componentId="box-reveal" :componentFiles='["BoxReveal.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                           |
| ---------------- | -------- | ----------------- | ----------------------------------------------------- |
| `color`          | `string` | `"#5046e6"`       | Couleur de fond de la boîte de révélation.            |
| `duration`       | `number` | `0.5`             | Durée de l'animation en secondes.                     |
| `delay`          | `number` | `0.25`            | Délai avant le début de l'animation, en secondes.     |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé. |

#credits

- Porté depuis [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal).

::
