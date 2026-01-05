---
title: Texte coloré
description: Un composant texte avec couleurs variées, effets de filtre et d'échelle.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ColourfulTextDemo.vue" config="ColourfulTextConfig" componentId="colourful-text" :componentFiles='["ColourfulText.vue"]'}

#api

## API

| Nom de propriété | Type       | Valeur par défaut | Description                                                                                                                                    |
| ---------------- | ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`           | `string`   | `"black"`         | Chaîne de texte à afficher avec des caractères animés et colorés. Chaque caractère est animé individuellement (transitions de couleur et mouvement). |
| `colors`         | `string[]` | `[ "rgb(131, 179, 32)", "rgb(47, 195, 106)", "rgb(42, 169, 210)", "rgb(4, 112, 202)", "rgb(107, 10, 255)", "rgb(183, 0, 218)", "rgb(218, 0, 171)", "rgb(230, 64, 92)", "rgb(232, 98, 63)", "rgb(249, 129, 47)", ]` | Palette de couleurs appliquée au texte.                                                                                                          |
| `startColor`     | `string`   | `"rgb(255,255,255)"` | Couleur de départ des caractères.                                                                                                              |
| `duration`       | `number`   | `5`               | Durée de l'animation en secondes.                                                                                                              |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Porté depuis [Colourful Text d'Aceternity UI](https://ui.aceternity.com/components/colourful-text)

::
