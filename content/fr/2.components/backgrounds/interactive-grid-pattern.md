---
title: Motif de grille interactif
description: Un fond de grille interactif réalisé en SVG, entièrement personnalisable.
category: Background
tags: [css, tailwind, background, svg, magic-ui]
---

::ComponentViewer{demoFile="InteractiveGridPatternDemo.vue" config="InteractiveGridPatternConfig" componentId="interactive-grid-pattern" :componentFiles='["InteractiveGridPattern.vue"]' }

#api

## API

| Nom de propriété    | Type               | Valeur par défaut | Description                                       |
| ------------------- | ------------------ | ----------------- | ------------------------------------------------- |
| `className`         | `string`           | -                 | Classes supplémentaires pour styliser le composant. |
| `squaresClassName`  | `string`           | -                 | Classes supplémentaires pour styliser les carrés. |
| `width`             | `number`           | `40`              | Largeur du carré en pixels.                       |
| `height`            | `number`           | `40`              | Hauteur du carré en pixels.                       |
| `squares`           | `[number, number]` | `[24, 24]`        | Nombre de carrés dans le motif de grille.         |

#credits

- Inspiré par [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern).
- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.

::
