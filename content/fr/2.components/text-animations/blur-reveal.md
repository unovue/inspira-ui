---
title: Révélation floutée
description: Un composant pour faire apparaître du contenu avec un flou progressif.
category: Animation de texte
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BlurRevealDemo.vue" config="BlurRevealConfig" componentId="blur-reveal" :componentFiles='["BlurReveal.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                                |
| ---------------- | -------- | ----------------- | -------------------------------------------------------------------------- |
| `duration`       | `number` | `1`               | Durée de l'animation de révélation par flou.                              |
| `delay`          | `number` | `1`               | Délai entre les composants enfants à révéler.                             |
| `blur`           | `string` | `10px`            | Intensité du flou appliqué aux éléments enfants.                          |
| `yOffset`        | `number` | `20`              | Décalage vertical appliqué lors de l'animation d'entrée.                  |

#credits

- Merci à [Magic UI](https://magicui.design/docs/components/blur-fade) pour ce superbe composant.

::
