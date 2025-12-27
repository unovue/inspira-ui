---
title: Carrousel 3D
description: Un carrousel 3D dynamique et interactif utilisant Three.js et Motion-V, offrant une rotation infinie fluide et des interactions utilisateur.
category: Visualisation
tags: [css, tailwind, threejs, motion-v]
---

::ComponentViewer{demoFile="Carousel3dDemo.vue" config="Carousel3dConfig" componentId="carousel-3d" :componentFiles='["Carousel3D.vue"]'}

#api

## API

| Nom de propriété  | Type        | Valeur par défaut | Description                                                 |
| ----------------- | ----------- | ----------------- | ----------------------------------------------------------- |
| `items`           | `unknown[]` | `[]`              | Liste d'images ou d'éléments à afficher dans le carrousel.  |
| `class`           | `string`    | `""`              | Classes CSS supplémentaires pour l'overlay du carrousel.    |
| `containerClass`  | `string`    | `""`              | Classes CSS pour styliser le conteneur du carrousel.        |
| `width`           | `number`    | `450`             | Largeur des éléments individuels.                           |
| `height`          | `number`    | `600`             | Hauteur des éléments individuels.                           |

#credits

- Construit avec Three.js pour le rendu 3D.
- Utilise Motion-V pour des animations fluides.
- Merci à [@safakdinc](https://github.com/safakdinc) pour le partage de ce composant.

::
