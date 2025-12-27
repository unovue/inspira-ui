---
title: Bouton dégradé
description: Un bouton animé élégant avec une bordure en dégradé conique rotatif et des propriétés personnalisables pour un rendu dynamique.
category: Bouton
tags: [css, tailwind, button]
---

::ComponentViewer{demoFile="GradientButtonDemo.vue" config="GradientButtonConfig" componentId="gradient-button" :componentFiles='["GradientButton.vue"]'}

#api

## API

| Nom de propriété | Type       | Valeur par défaut     | Description                                                     |
| ---------------- | ---------- | --------------------- | --------------------------------------------------------------- |
| `borderWidth`    | `number`   | `2`                   | Largeur, en pixels, de la bordure dégradée.                     |
| `colors`         | `string[]` | Tableau de couleurs   | Tableau des couleurs utilisées pour la bordure en dégradé conique. |
| `duration`       | `number`   | `2500`                | Durée de l'animation de rotation du dégradé en millisecondes.   |
| `borderRadius`   | `number`   | `8`                   | Rayon des coins arrondis, en pixels.                            |
| `blur`           | `number`   | `4`                   | Intensité du flou de l'effet de bordure dégradée, en pixels.    |
| `class`          | `string`   | `""`                  | Classes CSS supplémentaires pour un style personnalisé.         |
| `bgColor`        | `string`   | `"#000"`              | Couleur de fond du contenu du bouton.                           |

::
