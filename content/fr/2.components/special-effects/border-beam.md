---
title: Rayon de bordure
description: Un effet de rayon animé le long d'une bordure, avec taille, durée, couleurs et délai personnalisables.
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BorderBeamDemo.vue" config="BorderBeamConfig" componentId="border-beam" :componentFiles='["BorderBeam.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                           |
| ---------------- | -------- | ----------------- | --------------------------------------------------------------------- |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé.               |
| `size`           | `number` | `200`             | Taille de l'effet de rayon sur la bordure.                            |
| `duration`       | `number` | `15`              | Durée de l'animation en secondes.                                     |
| `borderWidth`    | `number` | `1.5`             | Largeur de la bordure entourant l'effet.                              |
| `anchor`         | `number` | `90`              | Point d'ancrage du rayon, définit sa position le long de la bordure.  |
| `colorFrom`      | `string` | `"#ffaa40"`       | Couleur de départ du dégradé du rayon.                                |
| `colorTo`        | `string` | `"#9c40ff"`       | Couleur de fin du dégradé du rayon.                                   |
| `delay`          | `number` | `0`               | Délai avant le démarrage de l'animation, en secondes.                 |

#credits

- Porté depuis [Magic UI](https://magicui.design/docs/components/border-beam).

::
