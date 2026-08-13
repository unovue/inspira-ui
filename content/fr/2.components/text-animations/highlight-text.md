---
title: Texte surligné
description: Surlignez du texte avec un balayage d'arrière-plan directionnel.
category: Animation de texte
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="HighlightTextDemo.vue" config="HighlightTextConfig" componentId="highlight-text" :componentFiles='["HighlightText.vue", "index.ts"]'}

#api

## API

| Prop               | Type                                   | Valeur par défaut                             | Description                                  |
| ------------------ | -------------------------------------- | --------------------------------------------- | -------------------------------------------- |
| `as`               | `string`                               | `span`                                        | Élément utilisé pour le conteneur externe.   |
| `triggerType`      | `hover` \| `ref` \| `inView` \| `auto` | `inView`                                      | Déclencheur de l'animation.                  |
| `transition`       | `Record<string, unknown>`              | transition spring                             | Transition Motion du balayage.               |
| `useInViewOptions` | `Record<string, unknown>`              | `{ once: true, initial: false, amount: 0.1 }` | Options du déclencheur d'entrée dans la vue. |
| `class`            | `string`                               | `-`                                           | Classes fusionnées avec le texte surligné.   |
| `highlightColor`   | `string`                               | `hsl(25 90% 80%)`                             | Couleur du surlignage.                       |
| `direction`        | `ltr` \| `rtl` \| `ttb` \| `btt`       | `ltr`                                         | Direction du balayage.                       |

Avec le déclencheur `ref`, le composant expose `animate(direction?)` et `reset()`.

#credits

- Inspiré par [Fancy Components](https://fancycomponents.dev/docs/components/text/text-highlighter).

::
