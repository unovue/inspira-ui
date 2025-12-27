---
title: Mots pivotants
description: Un composant qui fait défiler une liste de mots en rotation.
category: Animation de texte
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="FlipWordsDemo.vue" config="FlipWordsConfig" componentId="flip-words" :componentFiles='["FlipWords.vue"]'}

#api

## API

| Nom de propriété | Type     | Description                                                                                |
| ---------------- | -------- | ------------------------------------------------------------------------------------------ |
| `words`          | `Array`  | Tableau de mots à afficher et animer.                                                      |
| `duration`       | `number` | Durée (en millisecondes) d'affichage de chaque mot avant de passer au suivant.             |
| `class`          | `string` | Classes CSS supplémentaires à appliquer au composant.                                      |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Flip Words d'Aceternity UI](https://ui.aceternity.com/components/flip-words)

::
