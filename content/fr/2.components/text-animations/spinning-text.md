---
title: Texte rotatif
description: Le composant Spinning Text anime un texte en rotation circulaire avec vitesse, direction, couleur et transitions personnalisables pour un effet dynamique.
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="SpinningTextDemo.vue" config="SpinningTextConfig" componentId="spinning-text" :componentFiles='["SpinningText.vue"]'}

#api

## API

| Nom de propriété | Type                                                    | Valeur par défaut | Description                                             |
| ---------------- | ------------------------------------------------------- | ----------------- | ------------------------------------------------------- |
| `duration`       | `number`                                                | `10`              | Durée de la rotation circulaire complète.               |
| `reverse`        | `boolean`                                               | `false`           | Indique si l'animation tourne en sens inverse.          |
| `radius`         | `number`                                                | `5`               | Rayon du trajet circulaire pour l'animation du texte.   |
| `transition`     | `motion-v Transition`                                   | ``                | Effets de transition personnalisés pour l'animation.    |
| `variants`       | `{container: motion-v Variant, item: motion-v Variant}` | ``                | Variants pour les animations du conteneur et des items. |
| `class`          | `string`                                                | `""`              | Classe personnalisée pour le conteneur de texte.        |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Porté depuis [Magic UI Spinning Text](https://magicui.design/docs/components/spinning-text).

::
