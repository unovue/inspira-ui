---
title: Texte variable
description: Anime les axes d’une police variable près du pointeur ou révèle chaque lettre dans un ordre aléatoire au survol.
category: Animation de texte
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableTextDemo.vue" config="VariableTextConfig" componentId="variable-text" :componentFiles='["VariableText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Valeur par défaut | Description                                               |
| --------------------------- | ----------------------------------------- | ----------------- | --------------------------------------------------------- |
| `label`                     | `string`                                  | —                 | Texte séparé en lettres animées individuellement.         |
| `fromFontVariationSettings` | `string`                                  | —                 | Réglages des axes au repos et hors du rayon de proximité. |
| `toFontVariationSettings`   | `string`                                  | —                 | Réglages des axes au centre de l’effet de proximité.      |
| `containerRef`              | `MaybeComputedElementRef`                 | —                 | Élément utilisé pour calculer la position du pointeur.    |
| `radius`                    | `number`                                  | `50`              | Rayon en pixels dans lequel les lettres réagissent.       |
| `falloff`                   | `"linear" \| "exponential" \| "gaussian"` | `"linear"`        | Contrôle la diminution de l’effet avec la distance.       |
| `random`                    | `boolean`                                 | `false`           | Anime les lettres dans un ordre aléatoire au survol.      |
| `transition`                | `Transition`                              | Transition spring | Transition Motion utilisée en mode aléatoire.             |
| `staggerDuration`           | `number`                                  | `0.03`            | Délai entre les lettres en mode aléatoire.                |
| `as`                        | `string`                                  | `"span"`          | Élément HTML utilisé pour le texte racine.                |
| `class`                     | `string`                                  | —                 | Classes supplémentaires fusionnées sur l’élément racine.  |

#credits

- Porté depuis [Fancy Components Variable Font Cursor Proximity](https://fancycomponents.dev/docs/components/text/variable-font-cursor-proximity).
- Le comportement aléatoire est basé sur [Fancy Components Variable Font Hover By Random Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-random-letter).

::
