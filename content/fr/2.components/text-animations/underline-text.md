---
title: Texte souligné
description: Animez un soulignement depuis le centre ou le long d’un texte au survol.
category: Text Animation
tags: [css, tailwind, motion-v, underline]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="UnderlineTextDemo.vue" config="UnderlineTextConfig" componentId="underline-text" :componentFiles='["UnderlineText.vue", "index.ts"]'}

#api

## API

| Nom de la prop          | Type                                                     | Valeur par défaut | Description                                            |
| ----------------------- | -------------------------------------------------------- | ----------------- | ------------------------------------------------------ |
| `as`                    | `string`                                                 | `span`            | Élément HTML utilisé pour le texte.                    |
| `variant`               | `"center" \| "comes-in-goes-out" \| "goes-out-comes-in"` | `center`          | Style de l’animation du soulignement.                  |
| `direction`             | `"left" \| "right"`                                      | `left`            | Direction des variantes latérales.                     |
| `transition`            | `Record<string, unknown>`                                | Voir le défaut    | Transition Motion du soulignement.                     |
| `underlineHeightRatio`  | `number`                                                 | `0.1`             | Hauteur du soulignement relative à la taille du texte. |
| `underlinePaddingRatio` | `number`                                                 | `0.01`            | Espace sous le texte relatif à sa taille.              |
| `class`                 | `string`                                                 | —                 | Classes supplémentaires fusionnées sur le texte.       |

Utilisez le slot par défaut pour le contenu texte. Le composant utilise la couleur courante du texte pour le soulignement.

#credits

- Porté depuis [Fancy Components Underline Animation](https://fancycomponents.dev/docs/components/text/underline-animation).

::
