---
title: Floating Card
description: Une carte au survol avec perspective, inclinaison 3D et reflet qui suit le curseur, inspirée du site de Perplexity Comet.
category: Card
tags: [css, tailwind, card, motion, 3D, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="FloatingCardDemo.vue" config="FloatingCardConfig" componentId="floating-card" :componentFiles='["FloatingCard.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                     |
| ---------------- | -------- | ----------------- | --------------------------------------------------------------- |
| `rotateDepth`    | `number` | `17.5`            | Rotation X/Y maximale appliquée quand la carte est survolée.    |
| `translateDepth` | `number` | `20`              | Translation X/Y maximale appliquée pendant le suivi du curseur. |
| `class`          | `string` | `-`               | Classes Tailwind supplémentaires appliquées au conteneur.       |

#credits

- Inspiré par [Aceternity UI](https://ui.aceternity.com/components/comet-card).

::
