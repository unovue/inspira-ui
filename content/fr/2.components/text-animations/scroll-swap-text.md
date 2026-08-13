---
title: Texte à défilement
description: Faites défiler et remplacez le texte verticalement dans un conteneur de défilement.
category: Animation de texte
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="ScrollSwapTextDemo.vue" config="ScrollSwapTextConfig" componentId="scroll-swap-text" :componentFiles='["ScrollSwapText.vue", "index.ts"]'}

#api

## API

| Prop           | Type                      | Valeur par défaut                 | Description                                                   |
| -------------- | ------------------------- | --------------------------------- | ------------------------------------------------------------- |
| `as`           | `string`                  | `span`                            | Élément utilisé pour le conteneur du texte.                   |
| `containerRef` | `MaybeComputedElementRef` | —                                 | Conteneur de défilement utilisé pour calculer la progression. |
| `offset`       | `[string, string]`        | `["0 0", "0 1"]`                  | Décalages qui définissent la plage de l'animation.            |
| `class`        | `string`                  | `-`                               | Classes supplémentaires fusionnées avec le conteneur.         |
| `springConfig` | `object`                  | `{ stiffness: 200, damping: 30 }` | Configuration spring qui lisse la progression.                |

Le composant rend deux fois le texte du slot. Pendant le défilement, le premier texte sort tandis que le second entre.

#credits

- Inspiré par [Fancy Components](https://fancycomponents.dev/docs/components/text/scroll-and-swap).

::
