---
title: Focus
description: Met en évidence des mots dans une phrase avec un effet de flou dynamique et un cadre animé. Prend en charge le cycle automatique ou un mode focus au survol.
category: Text Animation
tags: [css, tailwind, codepen]
---

::ComponentViewer{demoFile="FocusDemo.vue" config="FocusConfig" componentId="focus" :componentFiles='["Focus.vue"]'}

#api

## API

| Nom de propriété           | Type      | Valeur par défaut   | Description                                                     |
| -------------------------- | --------- | ------------------- | --------------------------------------------------------------- |
| `sentence`                 | `string`  | `"Inspira Focus"`   | Phrase à afficher et animer mot par mot.                        |
| `manualMode`               | `boolean` | `false`             | Si `true`, le focus se fait au survol ; sinon il défile auto.   |
| `blurAmount`               | `number`  | `5`                 | Rayon de flou en pixels pour les mots inactifs.                 |
| `borderColor`              | `string`  | `"green"`           | Couleur de la bordure du cadre de focus animé.                  |
| `animationDuration`        | `number`  | `0.5`               | Durée, en secondes, des transitions d'animation du cadre.       |
| `pauseBetweenAnimations`   | `number`  | `1`                 | Pause, en secondes, entre deux transitions de focus automatiques. |

#credits

- Inspiré par [l'effet Focus Text Hover sur CodePen](https://codepen.io/CameronFitzwilliam/pen/JJRjMa).

::
