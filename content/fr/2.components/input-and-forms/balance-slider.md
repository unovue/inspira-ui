---
title: Curseur d'équilibre
description: Un curseur d'équilibre dynamique avec couleurs ajustables, limites configurables et info-bulle interactive.
category: Formulaires et saisie
tags: [css, tailwind, input]
---

::ComponentViewer{demoFile="BalanceSliderDemo.vue" config="BalanceSliderConfig" componentId="balance-slider" :componentFiles='["BalanceSlider.vue"]'}

#api

## API

| Nom de propriété   | Type     | Valeur par défaut | Description                                                  |
| ------------------ | -------- | ----------------- | ------------------------------------------------------------ |
| `initialValue`     | `number` | `50`              | Position initiale du curseur (0-100).                       |
| `leftColor`        | `string` | `"#e68a00"`       | Couleur de fond du côté gauche du curseur.                  |
| `rightColor`       | `string` | `"#ffffff"`       | Couleur de fond du côté droit du curseur.                   |
| `minShiftLimit`    | `number` | `40`              | Limite minimale à partir de laquelle l'animation de décalage s'active. |
| `maxShiftLimit`    | `number` | `68`              | Limite maximale au-delà de laquelle l'animation se désactive. |
| `leftContent`      | `string` | `"LEFT"`          | Texte affiché dans l'info-bulle pour le côté gauche.        |
| `rightContent`     | `string` | `"RIGHT"`         | Texte affiché dans l'info-bulle pour le côté droit.         |
| `indicatorColor`   | `string` | `"#FFFFFF"`       | Couleur de l'indicateur central du curseur.                 |

#credits

- Inspiré et porté depuis le code partagé dans [la version CSS only du Balance Slider par Jhey](https://x.com/jh3yy/status/1748809599598399792?s=46)
- Concept original par [Malay Vasa](https://x.com/MalayVasa/status/1748726374079381930).

::
