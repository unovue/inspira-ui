---
title: Barre de progression circulaire animée
description: Une barre de progression circulaire animée qui affiche une jauge avec valeur en pourcentage.
category: Divers
tags: [css, tailwind, input, magic-ui]
---

::ComponentViewer{demoFile="AnimatedCircularProgressBarDemo.vue" config="AnimatedCircularProgressBarConfig" componentId="animated-circular-progressbar" :componentFiles='["AnimatedCircularProgressBar.vue"]'}

#api

## API

| Nom de propriété         | Type      | Valeur par défaut        | Description                                   |
| ------------------------ | --------- | ------------------------ | --------------------------------------------- |
| `class`                  | `string`  | `-`                      | Classe appliquée au composant.                |
| `max`                    | `number`  | `100`                    | Valeur maximale de la jauge.                  |
| `min`                    | `number`  | `0`                      | Valeur minimale de la jauge.                  |
| `value`                  | `number`  | `0`                      | Valeur actuelle de la jauge.                  |
| `gaugePrimaryColor`      | `string`  | `rgb(79 70 229)`         | Couleur principale de la jauge.               |
| `gaugeSecondaryColor`    | `string`  | `rgba(0, 0, 0, 0.1)`     | Couleur secondaire de la jauge.               |
| `circleStrokeWidth`      | `number`  | `10`                     | Largeur du cercle de progression.             |
| `showPercentage`         | `boolean` | `true`                   | Affiche la valeur à l'intérieur du cercle.    |
| `duration`               | `number`  | `1`                      | Durée de l'animation (en secondes).           |

#credits

- Merci à [Magic UI](https://magicui.design/docs/components/animated-circular-progress-bar).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.

::
