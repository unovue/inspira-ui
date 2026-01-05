---
title: Grille scintillante
description: Un fond de grille scintillante réalisé avec Canvas, entièrement personnalisable via Tailwind CSS.
category: Background
tags: [css, tailwind, background, canvas, magic-ui]
---

::ComponentViewer{demoFile="FlickeringGridDemo.vue" config="FlickeringGridConfig" componentId="flickering-grid" :componentFiles='["FlickeringGrid.vue"]'}

#api

## API

| Nom de propriété  | Type     | Valeur par défaut | Description                              |
| ----------------- | -------- | ----------------- | ---------------------------------------- |
| `squareSize`      | `number` | `4`               | Taille de chaque carré de la grille.     |
| `gridGap`         | `number` | `6`               | Espacement entre les carrés.             |
| `flickerChance`   | `number` | `0.3`             | Probabilité qu'un carré scintille.       |
| `color`           | `string` | `rgb(0, 0, 0)`    | Couleur des carrés.                      |
| `width`           | `number` | `-`               | Largeur du canvas.                       |
| `height`          | `number` | `-`               | Hauteur du canvas.                       |
| `class`           | `string` | `-`               | Classes CSS supplémentaires pour le canvas. |
| `maxOpacity`      | `number` | `0.2`             | Opacité maximale des carrés.             |

#credits

- Merci à [magicui flickering-grid](https://magicui.design/docs/components/flickering-grid) pour ce composant.

::
