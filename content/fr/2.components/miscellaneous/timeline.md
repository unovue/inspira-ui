---
title: Chronologie
description: Une timeline interactive et esthétique avec animations fluides, étiquettes collantes et effet de dégradé au défilement.
category: Divers
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TimelineDemo.vue" config="TimelineConfig" componentId="timeline" :componentFiles='["Timeline.vue"]'}

#api

## API

| Nom de propriété  | Type                               | Valeur par défaut | Description                                        |
| ----------------- | ---------------------------------- | ----------------- | -------------------------------------------------- |
| `containerClass`  | `string`                           | `""`              | Classes CSS supplémentaires pour le conteneur de la timeline. |
| `class`           | `string`                           | `""`              | Classes CSS supplémentaires pour le style.         |
| `items`           | `{ id: string; label: string; }[]` | `[]`              | Liste des éléments de timeline, chacun avec un ID et un label. |
| `title`           | `string`                           | `""`              | Titre de la section timeline.                      |
| `description`     | `string`                           | `""`              | Description affichée sous le titre.                |

#credits

- Inspiré et porté depuis [Timeline d'Aceternity UI](https://ui.aceternity.com/components/timeline).

::
