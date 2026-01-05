---
title: Carte sensible à la direction du survol
description: Une carte qui détecte la direction du survol, affichant une image avec effets dynamiques et contenu superposé personnalisable.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="DirectionAwareHoverDemo.vue" config="DirectionAwareHoverConfig" componentId="direction-aware-hover" :componentFiles='["DirectionAwareHover.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                           |
| ---------------- | -------- | ----------------- | ----------------------------------------------------- |
| `imageUrl`       | `string` | Requise           | URL de l'image à afficher.                            |
| `class`          | `string` | `undefined`       | Classes CSS supplémentaires pour le conteneur de carte. |
| `imageClass`     | `string` | `undefined`       | Classes CSS supplémentaires pour l'élément image.     |
| `childrenClass`  | `string` | `undefined`       | Classes CSS supplémentaires pour la superposition de contenu. |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Direction Aware Hover d'Aceternity UI](https://ui.aceternity.com/components/direction-aware-hover)

::
