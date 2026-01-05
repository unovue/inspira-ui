---
title: Comparaison
description: Faites glisser pour comparer deux contenus – images, maquettes, code ou éléments personnalisés.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="CompareDemo.vue" config="CompareConfig" componentId="compare" :componentFiles='["Compare.vue", "StarField.vue"]'}

#api

## API

### Props

| Nom de propriété            | Type                | Valeur par défaut   | Description                               |
| --------------------------- | ------------------- | ------------------- | ----------------------------------------- |
| `firstImage`                | `string`            | `""`                | URL de la première image.                 |
| `secondImage`               | `string`            | `""`                | URL de la seconde image.                  |
| `firstImageAlt`             | `string`            | `"First image"`     | Texte alternatif pour la première image.  |
| `secondImageAlt`            | `string`            | `"Second image"`    | Texte alternatif pour la seconde image.   |
| `class`                     | `string`            | `""`                | Classes supplémentaires pour le composant. |
| `firstContentClass`         | `string`            | `""`                | Classes appliquées au wrapper du premier contenu. |
| `secondContentClass`        | `string`            | `""`                | Classes appliquées au wrapper du second contenu. |
| `initialSliderPercentage`   | `number`            | `50`                | Position initiale du curseur (0-100).     |
| `slideMode`                 | `"hover" \| "drag"` | `"hover"`           | Mode d'interaction du curseur.            |
| `showHandlebar`             | `boolean`           | `true`              | Afficher/masquer la poignée.              |
| `autoplay`                  | `boolean`           | `false`             | Active/désactive la lecture automatique.  |
| `autoplayDuration`          | `number`            | `5000`              | Durée du cycle automatique en ms.         |

### Événements

| Nom de l'événement  | Charge utile | Description                                       |
| ------------------- | ------------ | ------------------------------------------------- |
| `update:percentage` | `number`     | Émis lorsque la position du curseur change (0-100). |
| `drag:start`        | -            | Émis au début du glisser.                         |
| `drag:end`          | -            | Émis à la fin du glisser.                         |
| `hover:enter`       | -            | Émis quand la souris entre dans le composant.     |
| `hover:leave`       | -            | Émis quand la souris quitte le composant.         |

### Slots

| Nom du slot      | Contenu par défaut                                   | Description                                                                                                                    |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `first-content`  | Élément `<img>` si la prop `firstImage` est fournie  | Contenu affiché sur le côté gauche/premier. Dispose de toute la largeur/hauteur du composant.                                 |
| `second-content` | Élément `<img>` si la prop `secondImage` est fournie | Contenu affiché sur le côté droit/deuxième. Dispose de toute la largeur/hauteur du composant.                                 |
| `handle`         | Poignée de curseur par défaut avec icône de points   | Poignée personnalisée du curseur. Positionnée automatiquement sur la ligne de séparation. Doit gérer le positionnement absolu. |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour ce composant.
- Inspiré par [Compare d'Aceternity UI](https://ui.aceternity.com/components/compare).

::
