---
title: Compteur numérique
description: Anime des nombres pour compter à la hausse ou à la baisse jusqu'à une valeur cible.
category: Animation de texte
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="NumberTickerDemo.vue" config="NumberTickerConfig" componentId="number-ticker" :componentFiles='["NumberTicker.vue"]'}

#api

## API

| Nom de propriété | Type                | Valeur par défaut | Description                                                        |
| ---------------- | ------------------- | ----------------- | ------------------------------------------------------------------ |
| `value`          | `int`               | `0`               | Valeur cible.                                                      |
| `direction`      | `up \| down`        | `up`              | Direction du comptage.                                             |
| `decimalPlaces`  | `number`            | `0`               | Nombre de décimales à afficher.                                    |
| `delay`          | `number`            | `0`               | Délai avant le démarrage du comptage (en millisecondes).           |
| `duration`       | `number`            | `1000`            | Durée totale de l'animation (en millisecondes).                    |
| `transition`     | `TransitionPresets` | `easeOutCubic`    | Nom du preset de transition (https://vueuse.org/core/useTransition). |

#credits

- Merci à [Grzegorz Krol](https://github.com/Grzechu335) pour le portage de ce composant.
- Porté depuis [Magic UI NumberTicker](https://magicui.design/docs/components/number-ticker).

::
