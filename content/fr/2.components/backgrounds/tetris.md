---
title: Tetris
description: Composant de fond Tetris : vous pouvez même cliquer sur un bloc pour l'éliminer.
category: Background
tags: [css, tailwind, background]
---

::ComponentViewer{demoFile="TetrisDemo.vue" config="TetrisConfig" componentId="tetris" :componentFiles='["Tetris.vue"]' dependencies="theme-colors"}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                         |
| ---------------- | -------- | ----------------- | --------------------------------------------------- |
| `class`          | `string` | `""`              | Classes supplémentaires pour styliser le composant. |
| `base`           | `number` | `10`              | Nombre de blocs par ligne.                          |
| `square-color`   | `string` | `""`              | Couleur des blocs.                                  |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Inspiré et porté depuis [Nuxt UI Home](https://ui2.nuxt.com/).

::
