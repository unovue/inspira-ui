---
title: Scroll Island
description: Un composant interactif affichant la progression de défilement avec des visuels animés et une zone extensible pour du contenu supplémentaire.
category: Divers
tags: [css, tailwind, number-flow]
---

::ComponentViewer{demoFile="ScrollIslandDemo.vue" config="ScrollIslandConfig" componentId="scroll-island" :componentFiles='["ScrollIsland.vue"]' dependencies="@number-flow/vue"}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                     |
| ---------------- | -------- | ----------------- | ----------------------------------------------- |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé. |
| `title`          | `string` | `"Progress"`      | Titre affiché dans l'en-tête du composant.      |
| `height`         | `string` | `44`              | Hauteur du composant.                           |

#credits

- Inspiré par le travail de [Ali Samadi](https://x.com/alisamadi__/status/1854312982559502556) & [Nitish Khagwal](https://x.com/nitishkmrk)
- [NumberFlow par Maxwell Barvian](https://number-flow.barvian.me/vue) pour le formatage et les animations numériques.

::
