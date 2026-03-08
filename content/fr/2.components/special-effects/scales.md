---
title: Écailles
description: Un effet d'arrière-plan avec un motif de lignes diagonales, horizontales ou verticales répétées.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ScalesDemo.vue" config="ScalesConfig" componentId="scales" :componentFiles='["Scales.vue"]'}

#api

## API

| Nom de la prop   | Type                                       | Défaut       | Description                                                      |
| ---------------- | ------------------------------------------ | ------------ | ---------------------------------------------------------------- |
| `orientation`    | `"horizontal" \| "vertical" \| "diagonal"` | `"diagonal"` | Direction du motif de lignes répétées.                           |
| `size`           | `number`                                   | `10`         | Taille de chaque tuile répétée en pixels.                        |
| `color`          | `string`                                   | —            | Valeur de couleur CSS pour les lignes du motif.                  |
| `class`          | `string`                                   | —            | Classes CSS supplémentaires pour la superposition du motif.      |
| `containerClass` | `string`                                   | —            | Classes CSS supplémentaires pour l'élément conteneur extérieur.  |

#credits

- Porté depuis [Aceternity UI Scales](https://ui.aceternity.com/components/scales).

::
