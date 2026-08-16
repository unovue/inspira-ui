---
title: Texte respirant
description: Animez continuellement les axes d’une police variable avec un rythme décalé.
category: Animation de texte
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="BreathingTextDemo.vue" config="BreathingTextConfig" componentId="breathing-text" :componentFiles='["BreathingText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Valeur par défaut                      | Description                                              |
| --------------------------- | ----------------------------------------- | -------------------------------------- | -------------------------------------------------------- |
| `text`                      | `string`                                  | Contenu du slot                        | Texte à diviser en lettres animées séparément.           |
| `as`                        | `string`                                  | `"span"`                               | Élément HTML utilisé pour le texte racine.               |
| `fromFontVariationSettings` | `string`                                  | —                                      | Axes de police utilisés au début de chaque cycle.        |
| `toFontVariationSettings`   | `string`                                  | —                                      | Axes de police utilisés à la fin de chaque cycle.        |
| `transition`                | `Transition`                              | `{ duration: 1.5, ease: "easeInOut" }` | Transition Motion de chaque lettre.                      |
| `staggerDuration`           | `number`                                  | `0.1`                                  | Délai entre les animations de chaque lettre.             |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`                              | Origine utilisée pour calculer l’ordre du décalage.      |
| `repeatDelay`               | `number`                                  | `0.1`                                  | Délai entre les cycles de respiration.                   |
| `class`                     | `string`                                  | —                                      | Classes supplémentaires fusionnées sur l’élément racine. |

Utilisez une police variable et transmettez les axes qu’elle prend en charge. Par exemple, Roboto Flex accepte `wght` et `wdth`.

#credits

- Porté depuis [Fancy Components Breathing Text](https://fancycomponents.dev/docs/components/text/breathing-text).

::
