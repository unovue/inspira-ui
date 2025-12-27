---
title: Curseur ligne fluide
description: Une traînée de curseur animée et réactive avec un mouvement ondulant, utilisant une physique de ressort et des ondes de couleur dynamiques.
category: Curseur
tags: [css, tailwind, cursor, webgl, cursify]
badge: Nouveau
---

::ComponentViewer{demoFile="SleekLineCursorDemo.vue" config="SleekLineCursorConfig" componentId="sleek-line-cursor" :componentFiles='["SleekLineCursor.vue"]'}

## API

| Nom de propriété | Type                 | Valeur par défaut | Description                                                               |
| ---------------- | -------------------- | ----------------- | ------------------------------------------------------------------------- |
| `class`          | `string \| string[]` | `undefined`       | Classes CSS supplémentaires pour le conteneur du canvas.                  |
| `trails`         | `number`             | `20`              | Nombre de lignes de traînée rendues derrière le curseur.                  |
| `size`           | `number`             | `50`              | Nombre de nœuds reliés par ressort pour chaque traînée.                   |
| `friction`       | `number`             | `0.5`             | Friction globale appliquée à la vélocité.                                 |
| `dampening`      | `number`             | `0.25`            | Amortissement de la vélocité entre les nœuds connectés.                   |
| `tension`        | `number`             | `0.98`            | Réduit l'intensité du ressort le long de la traînée pour un mouvement fluide. |

> 💡 Ce composant utilise `pointer-events-none` et est fixé en plein écran par défaut. Vous pouvez étendre ou surcharger son style via la prop `class`.

#credits

- Porté depuis [Canvas Cursor par Cursify](https://cursify.vercel.app/components/canvas-cursor).

::
