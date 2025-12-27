---
title: Conteneur de mots pivotants
description: Un conteneur qui fait défiler des mots en animant la largeur.
category: Animation de texte
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerTextFlipDemo.vue" config="ContainerTextFlipConfig" componentId="container-text-flip" :componentFiles='["ContainerTextFlip.vue"]'}

#api

## API

| Nom de propriété    | Type       | Valeur par défaut                                | Description                                          |
| ------------------- | ---------- | ------------------------------------------------ | ---------------------------------------------------- |
| `words`             | `string[]` | `["better", "modern", "beautiful", "awesome"]`   | Tableau de mots à faire défiler dans l'animation.    |
| `interval`          | `number`   | `3000`                                           | Temps en millisecondes entre chaque transition.      |
| `animationDuration` | `number`   | `700`                                            | Durée de l'animation de transition, en millisecondes. |
| `class`             | `string`   | ``                                               | Classes CSS supplémentaires à appliquer au conteneur. |
| `textClass`         | `string`   | ``                                               | Classes CSS supplémentaires à appliquer au texte.     |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Porté depuis [Container Text Flip d'Aceternity UI](https://ui.aceternity.com/components/container-text-flip).

::
