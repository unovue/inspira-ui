---
title: Curseur à traînée d'images
description: Un effet de curseur interactif qui crée une traînée dynamique d'images suivant le mouvement de la souris, avec plusieurs variantes d'animation.
category: Curseur
tags: [css, tailwind, cursor, codrops, gsap]
badge: New
---

::ComponentViewer{demoFile="ImageTrailCursorDemo.vue" config="ImageTrailCursorConfig" componentId="image-trail-cursor" :componentFiles='["ImageTrailCursor.vue", "trail-variants.ts"]' dependencies="gsap"}

#api

## API

| Nom de propriété | Type          | Valeur par défaut | Description                                                |
| ---------------- | ------------- | ----------------- | ---------------------------------------------------------- |
| `images`         | `string[]`    | `[]`              | Tableau d'URL d'images à afficher dans l'effet de traînée. |
| `variant`        | `VariantType` | `"type1"`         | Type de variante d'animation (`"type1"` à `"type7"`).      |

> 💡 Ce composant crée un conteneur pleine largeur et pleine hauteur avec un z-index élevé pour le suivi du curseur. Chaque image fait 190px de large, avec un ratio 1.1 et des coins arrondis.

#credits

- Inspiré par les effets modernes de traînée de curseur et les interactions au survol d'images.
- Construit avec l'API de composition Vue 3 pour une réactivité optimale.
- Porté depuis [l'article Codrops](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)

::
