---
title: Texte glitch
description: Crée un effet glitch coloré sur le texte avec vitesse, ombres et déclenchement au survol personnalisables.
category: Animation de texte
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextGlitchDemo.vue" config="TextGlitchConfig" componentId="text-glitch" :componentFiles='["TextGlitch.vue"]'}

#api

## API

| Nom de propriété  | Type      | Valeur par défaut | Description                                                           |
| ----------------- | --------- | ----------------- | --------------------------------------------------------------------- |
| `text`            | `string`  | `""`              | Texte à afficher avec l'effet glitch.                                 |
| `speed`           | `number`  | `0.5`             | Vitesse de l'animation glitch, en secondes.                           |
| `enableShadows`   | `boolean` | `true`            | Active les ombres colorées qui renforcent l'effet glitch.             |
| `enableOnHover`   | `boolean` | `false`           | Si `true`, l'animation glitch ne s'active qu'au survol.               |
| `class`           | `string`  | `undefined`       | Classes CSS supplémentaires pour la div conteneur.                    |

#credits

- Inspiré et développé à partir des ressources des vidéos YouTube suivantes.
  - https://www.youtube.com/watch?v=7Xyg8Ja7dyY
  - https://www.youtube.com/watch?v=9CCkp_El1So

::
