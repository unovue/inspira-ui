---
title: Ondes concentriques
description: Un effet d'ondulation animé, souvent utilisé derrière des éléments pour les mettre en valeur.
category: Background
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="RippleDemo.vue" config="RippleConfig" componentId="ripple" :componentFiles='["Ripple.vue", "RippleCircle.vue", "RippleContainer.vue"]'}

#api

## API

| Nom de propriété              | Type     | Valeur par défaut | Description                                                               |
| ----------------------------- | -------- | ----------------- | ------------------------------------------------------------------------- |
| `baseCircleSize`              | `number` | `210`             | Taille du cercle principal, en pixels.                                   |
| `baseCircleOpacity`           | `number` | `0.24`            | Opacité du cercle principal.                                             |
| `spaceBetweenCircle`          | `number` | `70`              | Espace entre chaque cercle d'ondulation, en pixels.                      |
| `circleOpacityDowngradeRatio` | `number` | `0.03`            | Taux de diminution d'opacité pour chaque cercle suivant.                 |
| `circleClass`                 | `string` | `undefined`       | Classe(s) CSS supplémentaires pour styliser les cercles.                 |
| `waveSpeed`                   | `number` | `80`              | Vitesse de l'animation d'onde, en millisecondes.                         |
| `numberOfCircles`             | `number` | `7`               | Nombre de cercles à afficher.                                            |

#credits

- Merci à [Magic UI](https://magicui.design/docs/components/ripple).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.
- Merci à [Nathan De Pachtere](https://nathandepachtere.com/) pour la mise à jour du composant.

::
