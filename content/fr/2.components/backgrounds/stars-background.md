---
title: Fond étoilé
description: Un fond de champ d'étoiles avec parallaxe, utilisant des couches en mouvement et des positions d'étoiles aléatoires.
category: Arrière-plan
tags: [css, tailwind, background, animate-ui, motion-v]
---

::ComponentViewer{demoFile="StarsBackgroundDemo.vue" config="StarsBackgroundConfig" componentId="bg-stars" :componentFiles='["StarsBackground.vue"]'}

#api

## API

| Nom de propriété | Type            | Valeur par défaut               | Description                                                             |
| ---------------- | --------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `factor`         | `number`        | `0.05`                           | Multiplicateur pour le mouvement de parallaxe de la souris.             |
| `speed`          | `number`        | `50`                             | Vitesse de base (en secondes) pour l'animation de boucle verticale des couches. |
| `transition`     | `SpringOptions` | `{ stiffness: 50, damping: 20 }` | Configuration de physique à ressort pour une réponse fluide au curseur. |
| `starColor`      | `string`        | `"#fff"`                         | Couleur des étoiles (toute valeur CSS valide).                          |
| `class`          | `string`        | `—`                              | Classes optionnelles pour la div conteneur (pratique pour le z-index, etc.). |

> 💡 Ce composant encapsule un slot enfant : vous pouvez placer d'autres éléments UI par-dessus le fond.

#credits

- Porté depuis [Animate UI](https://animate-ui.com/docs/backgrounds/stars)

::
