---
title: Carte rotative
description: Une carte dynamique avec des animations de rotation à 180 degrés sur les axes X et Y, offrant un effet visuel interactif et attrayant.
category: Card
tags: [css, tailwind, card]
---

::ComponentViewer{demoFile="FlipCardDemo.vue" config="FlipCardConfig" componentId="flip-card" :componentFiles='["FlipCard.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                        |
| ---------------- | -------- | ----------------- | -------------------------------------------------- |
| `class`          | `string` | `-`               | Classe appliquée au composant.                     |
| `rotate`         | `x \| y` | `y`               | Valeur d'axe de rotation à appliquer.              |

| Nom du slot | Description                     |
| ----------- | ------------------------------- |
| `default`   | Composant affiché en face avant. |
| `back`      | Composant affiché au dos.       |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.

::
