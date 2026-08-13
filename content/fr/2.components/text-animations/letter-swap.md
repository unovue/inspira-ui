---
title: Letter Swap
description: Échangez les lettres verticalement au survol avec des modes direct, ping-pong et aléatoire.
category: Animation du texte
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="LetterSwapDemo.vue" config="LetterSwapConfig" componentId="letter-swap" :componentFiles='["LetterSwap.vue", "index.ts"]' dependencies="motion-v"}

#api

| Prop              | Type                                      | Valeur par défaut                   | Description                                               |
| ----------------- | ----------------------------------------- | ----------------------------------- | --------------------------------------------------------- |
| `label`           | `string`                                  | —                                   | Texte à afficher et à animer.                             |
| `animation`       | `"forward" \| "pingpong"`                 | `"forward"`                         | Joue une fois ou s'inverse lorsque le pointeur sort.      |
| `random`          | `boolean`                                 | `false`                             | Anime les lettres dans un ordre mélangé.                  |
| `reverse`         | `boolean`                                 | `true`                              | Définit la direction verticale de l'échange.              |
| `transition`      | `Transition`                              | `{ type: "spring", duration: 0.7 }` | Transition Motion utilisée pour chaque lettre.            |
| `staggerDuration` | `number`                                  | `0.03`                              | Délai entre le début de l'animation de chaque lettre.     |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"`                           | Origine utilisée pour calculer l'ordre décalé.            |
| `class`           | `string`                                  | `-`                                 | Classes supplémentaires fusionnées avec l'élément racine. |

#credits

- Inspiré par [Fancy Components](https://fancycomponents.dev/docs/components/text/letter-swap.md).
- Œuvre originale de [Daniel Petho](https://github.com/danielpetho/fancy).

::
