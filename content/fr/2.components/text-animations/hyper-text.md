---
title: Hyper texte
description: Une animation de texte changeant rapidement au survol.
category: Animation de texte
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="HyperTextDemo.vue" config="HyperTextConfig" componentId="hyper-text" :componentFiles='["HyperText.vue"]'}

#api

## API

| Nom de propriété | Type      | Valeur par défaut | Description                                               |
| ---------------- | --------- | ----------------- | --------------------------------------------------------- |
| `class`          | `string`  | `""`              | Classes CSS supplémentaires à appliquer au composant.     |
| `text`           | `string`  | Requise           | Texte à animer.                                           |
| `duration`       | `number`  | `0.8`             | Durée totale de l'animation, en secondes.                 |
| `animateOnLoad`  | `boolean` | `true`            | Lance l'animation au chargement.                          |

#credits

- Inspiré du composant [Hyper Text de Magic UI](https://magicui.design/docs/components/hyper-text).
- Merci à [Prem](https://github.com/premdasvm) pour le portage de ce composant.

::
