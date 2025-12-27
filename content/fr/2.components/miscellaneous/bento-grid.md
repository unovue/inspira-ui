---
title: Grille bento
description: Une grille soignée pouvant accueillir différents composants enfants.
category: Divers
tags: [css, tailwind, bento, aceternity-ui]
---

::ComponentViewer{demoFile="BentoGridDemo.vue" config="BentoGridConfig" componentId="bento-grid" :componentFiles='["BentoGrid.vue", "BentoGridCard.vue", "BentoGridItem.vue"]'}

#api

## API

#### `BentoGridItem`

| Nom du slot | Description                           |
| ----------- | ------------------------------------- |
| `title`     | Composant affiché comme titre.        |
| `description` | Composant affiché comme description. |
| `icon`      | Composant affiché comme icône.        |
| `header`    | Composant affiché comme en-tête.      |

#### `BentoGridCard`

| Nom du slot | Description                              |
| ----------- | ---------------------------------------- |
| `background`| Composant affiché en arrière-plan.       |

| Nom de la prop | Type      | Description                          |
| -------------- | --------- | ------------------------------------ |
| `name`         | `string`  | Nom ou titre affiché sur la carte.   |
| `icon`         | `?string` | Icône à afficher sur la carte.       |
| `description`  | `string`  | Description affichée sur la carte.   |
| `href`         | `string`  | Lien URL pour l'appel à l'action.    |
| `cta`          | `string`  | Texte de l'appel à l'action.         |

#credits

- Merci à [Aceternity UI](https://ui.aceternity.com/components/bento-grid) et [Magic UI](https://magicui.design/docs/components/bento-grid) pour ce superbe composant.

::
