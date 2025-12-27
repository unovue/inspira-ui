---
title: Bouton à ondulation
description: Un bouton élégant avec un effet d'onde personnalisable et une durée d'animation ajustable.
category: Bouton
tags: [css, tailwind, button, magic-ui]
---

::ComponentViewer{demoFile="RippleButtonDemo.vue" config="RippleButtonConfig" componentId="ripple-button" :componentFiles='["RippleButton.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                    |
| ---------------- | -------- | ----------------- | -------------------------------------------------------------- |
| `class`          | `string` | -                 | Classes CSS supplémentaires pour un style personnalisé.        |
| `rippleColor`    | `string` | `"#ADD8E6"`       | Couleur de l'effet d'onde.                                     |
| `duration`       | `number` | `600`             | Durée de l'animation de l'onde en millisecondes.               |

## Événements émis

| Nom de l'événement | Type    | Description  |
| ------------------ | ------- | ------------ |
| `click`            | `event` | Événement clic |

#credits

- Inspiré par le composant [Ripple Button de Magic UI](https://magicui.design/docs/components/ripple-button).
- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.

::
