---
title: Livre
description: Un composant de livre 3D avec tailles et dégradés personnalisables.
category: Miscellaneous
tags: [css, tailwind, x-ui]
---

::ComponentViewer{demoFile="BookDemo.vue" config="BookConfig" componentId="book" :componentFiles='["Book.vue", "BookHeader.vue", "BookTitle.vue", "BookDescription.vue", "index.ts"]'}

#api

## API

#### `Book`

| Nom de propriété | Type    | Valeur par défaut | Description                                       |
| ---------------- | ------- | ----------------- | ------------------------------------------------- |
| `class`          | String  | -                 | Classes supplémentaires pour styliser le composant. |
| `duration`       | Number  | 1000              | Durée de l'animation en millisecondes.            |
| `color`          | String  | "zinc"            | Palette de couleur pour le dégradé du livre.      |
| `isStatic`       | Boolean | false             | Désactive les animations au survol si `true`.     |
| `size`           | String  | "md"              | Variante de taille du livre.                      |
| `radius`         | String  | "md"              | Variante de rayon de bordure du livre.            |
| `shadowSize`     | String  | "lg"              | Variante de taille d'ombre du livre.              |

#### `BookHeader`

| Nom de propriété | Type   | Valeur par défaut | Description                                   |
| ---------------- | ------ | ----------------- | --------------------------------------------- |
| `class`          | String | -                 | Classes supplémentaires pour un style personnalisé. |

#### `BookTitle`

| Nom de propriété | Type   | Valeur par défaut | Description                                   |
| ---------------- | ------ | ----------------- | --------------------------------------------- |
| `class`          | String | -                 | Classes supplémentaires pour un style personnalisé. |

#### `BookDescription`

| Nom de propriété | Type   | Valeur par défaut | Description                                   |
| ---------------- | ------ | ----------------- | --------------------------------------------- |
| `class`          | String | -                 | Classes supplémentaires pour un style personnalisé. |

#credits

- Merci à [x/UI](https://ui.3x.gl/docs/book) pour l'inspiration.
- Merci à [kalix127](https://github.com/kalix127) pour le portage de ce composant.

::
