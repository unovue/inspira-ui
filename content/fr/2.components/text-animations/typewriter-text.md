---
title: Texte machine à écrire
description: Écrivez et alternez entre plusieurs textes avec un curseur animé optionnel.
category: Animation de texte
tags: [css, tailwind, motion-v, typewriter]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="TypewriterTextDemo.vue" config="TypewriterTextConfig" componentId="typewriter-text" :componentFiles='["TypewriterText.vue", "index.ts"]'}

#api

## API

| Prop                      | Type                                             | Valeur par défaut         | Description                                              |
| ------------------------- | ------------------------------------------------ | ------------------------- | -------------------------------------------------------- |
| `text`                    | `string \| string[]`                             | —                         | Texte ou séquence de textes à écrire.                    |
| `as`                      | `string`                                         | `"div"`                   | Élément HTML utilisé pour le texte racine.               |
| `speed`                   | `number`                                         | `50`                      | Délai entre les caractères écrits, en millisecondes.     |
| `initialDelay`            | `number`                                         | `0`                       | Délai avant le début de l’écriture, en millisecondes.    |
| `waitTime`                | `number`                                         | `2000`                    | Pause avant la suppression ou le texte suivant.          |
| `deleteSpeed`             | `number`                                         | `30`                      | Délai entre les caractères supprimés, en millisecondes.  |
| `loop`                    | `boolean`                                        | `true`                    | Revenir au premier texte après le dernier.               |
| `showCursor`              | `boolean`                                        | `true`                    | Afficher le curseur animé.                               |
| `hideCursorOnType`        | `boolean`                                        | `false`                   | Masquer le curseur pendant l’écriture ou la suppression. |
| `cursorChar`              | `string`                                         | `"\|"`                    | Caractère utilisé comme curseur.                         |
| `cursorAnimationVariants` | `{ initial: VariantType; animate: VariantType }` | Voir la valeur par défaut | Variants Motion utilisés pour le clignotement.           |
| `cursorClass`             | `string`                                         | `"ml-1"`                  | Classes supplémentaires appliquées au curseur.           |
| `class`                   | `string`                                         | —                         | Classes supplémentaires fusionnées sur l’élément racine. |

#credits

- Porté depuis [Fancy Components Typewriter](https://fancycomponents.dev/docs/components/text/typewriter).

::
