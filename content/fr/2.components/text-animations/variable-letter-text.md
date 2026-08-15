---
title: Texte à lettres variables
description: Anime les axes d’une police variable lettre par lettre au survol.
category: Animation de texte
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableLetterTextDemo.vue" config="VariableLetterTextConfig" componentId="variable-letter-text" :componentFiles='["VariableLetterText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Valeur par défaut | Description                                       |
| --------------------------- | ----------------------------------------- | ----------------- | ------------------------------------------------- |
| `label`                     | `string`                                  | —                 | Texte séparé en lettres animées individuellement. |
| `fromFontVariationSettings` | `string`                                  | `"'wght' 400"`    | Axes utilisés au repos.                           |
| `toFontVariationSettings`   | `string`                                  | `"'wght' 900"`    | Axes appliqués au survol.                         |
| `transition`                | `Transition`                              | Transition spring | Transition Motion utilisée pour chaque lettre.    |
| `staggerDuration`           | `number`                                  | `0.03`            | Délai entre le début de chaque animation.         |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`         | Origine du calcul de l’ordre progressif.          |
| `class`                     | `string`                                  | —                 | Classes supplémentaires fusionnées sur la racine. |

Utilisez une police variable et les axes qu’elle prend en charge. Roboto Flex accepte par exemple `wght` et `wdth`.

#credits

- Porté depuis [Fancy Components Variable Font Hover By Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-letter).

::
