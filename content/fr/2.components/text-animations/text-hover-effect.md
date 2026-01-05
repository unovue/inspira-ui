---
title: Effet de texte au survol
description: Un effet de survol qui anime et trace un dégradé autour du texte, comme sur x.ai.
category: Text Animation
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextHoverEffectDemo.vue" config="TextHoverEffectConfig" componentId="text-hover-effect" :componentFiles='["TextHoverEffect.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                   |
| ---------------- | -------- | ----------------- | ------------------------------------------------------------- |
| `text`           | `string` | Requise           | Texte à afficher avec l'effet de survol.                      |
| `duration`       | `number` | `200`             | Durée de l'animation de transition du masque, en secondes.    |
| `strokeWidth`    | `number` | `0.75`            | Largeur du contour du texte.                                  |
| `opacity`        | `number` | `null`            | Opacité du texte.                                             |

::
