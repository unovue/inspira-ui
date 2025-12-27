---
title: Surlignage de texte
description: Un effet qui remplit l'arrière-plan du texte pour le mettre en valeur.
category: Animation de texte
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextHighlightDemo.vue" config="TextHighlightConfig" componentId="text-highlight" :componentFiles='["TextHighlight.vue"]'}

#api

## API

| Nom de propriété  | Type     | Valeur par défaut | Description                                                                |
| ----------------- | -------- | ----------------- | -------------------------------------------------------------------------- |
| `delay`           | `number` | `0`               | Délai avant le début de l'animation, en `ms`.                              |
| `duration`        | `number` | `2000`            | Durée de l'animation, en `ms`.                                             |
| `text-end-color`  | `string` | `inherit`         | Couleur du texte à la fin de l'animation. Respectez les recommandations WCAG. |

#credits

- Inspiré par [Aceternity UI](https://ui.aceternity.com/components/hero-highlight)
- Merci à [Nathan De Pachtere](https://nathandepachtere.com) pour le portage de ce composant.

::
