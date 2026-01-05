---
title: Orbite
description: Un composant qui anime du contenu sur une orbite circulaire, avec durée, délai et rayon personnalisables, et une option pour afficher la trajectoire.
category: Visualization
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="OrbitDemo.vue" config="OrbitConfig" componentId="orbit" :componentFiles='["Orbit.vue", "index.ts"]'}

#api

## API

| Nom de propriété | Type                  | Valeur par défaut | Description                                                                 |
| ---------------- | --------------------- | ----------------- | --------------------------------------------------------------------------- |
| `direction`      | `normal` \| `reverse` | `normal`          | Sens de l'orbite. Vous pouvez utiliser la constante ORBIT_DIRECTION.        |
| `duration`       | `?number`             | `20`              | Durée de l'animation d'orbite en secondes.                                  |
| `delay`          | `?number`             | `10`              | Délai avant le début de l'animation, en secondes.                           |
| `radius`         | `?number`             | `50`              | Rayon du parcours orbital, en pixels.                                       |
| `path`           | `?boolean`            | `false`           | Affiche un cercle de trajectoire si `true`.                                 |

#credits

- Inspiré par [Magic UI](https://magicui.design/docs/components/orbiting-circles).
- Merci à [Nathan De Pachtere](https://nathandepachtere.com/) pour la mise à jour de ce composant.

::
