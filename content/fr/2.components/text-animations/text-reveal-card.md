---
title: Carte texte dévoilé
description: Effet au mouvement de souris pour révéler du texte en bas de la carte.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextRevealCardDemo.vue" config="TextRevealCardConfig" componentId="text-reveal-card" :componentFiles='["TextRevealCard.vue", "TextRevealStars.vue"]'}

#api

## API

| Nom de propriété | Type     | Description                                                      |
| ---------------- | -------- | ---------------------------------------------------------------- |
| class            | `String` | Classes supplémentaires à ajouter à la carte.                    |
| starsCount       | `Number` | Contrôle le nombre d'étoiles générées.                          |
| starsClass       | `String` | Classes supplémentaires à ajouter aux étoiles flottant sur le contenu. |

| Nom du slot | Description                                                |
| ----------- | ---------------------------------------------------------- |
| header      | `String`                                                   |
| text        | Texte affiché par défaut lorsque la carte n'est pas survolée. |
| revealText  | Texte révélé au survol de la carte.                        |

#credits

- Merci à [M Atif](https://github.com/atif0075) pour le portage de ce composant.
- Porté depuis [Text Reveal Card d'Aceternity UI](https://ui.aceternity.com/components/text-reveal-card).

::
