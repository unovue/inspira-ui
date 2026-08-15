---
title: Carrousel cube
description: Un carrousel 3D à quatre faces pour parcourir des images et des vidéos avec le glisser-déposer.
category: Carte
tags: [css, tailwind, motion-v, carousel, 3d]
badge: New
---

::ComponentViewer{demoFile="CubeCarouselDemo.vue" config="CubeCarouselConfig" componentId="cube-carousel" :componentFiles='["CubeCarousel.vue", "index.ts"]'}

#api

## API

### `CubeCarousel`

| Nom de prop        | Type                                     | Valeur par défaut                                 | Description                                            |
| ------------------ | ---------------------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| `items`            | `CubeCarouselItem[]`                     | —                                                 | Images ou vidéos à placer sur les faces du cube.       |
| `width`            | `number`                                 | —                                                 | Largeur de chaque face en pixels.                      |
| `height`           | `number`                                 | —                                                 | Hauteur de chaque face en pixels.                      |
| `class`            | `string`                                 | —                                                 | Classes supplémentaires de la racine.                  |
| `debug`            | `boolean`                                | `false`                                           | Affiche les couleurs et les identifiants des faces.    |
| `perspective`      | `number`                                 | `600`                                             | Distance de perspective CSS en pixels.                 |
| `direction`        | `"top" \| "bottom" \| "left" \| "right"` | `"left"`                                          | Axe et direction de rotation.                          |
| `transition`       | `Record<string, unknown>`                | `{ duration: 1.25, ease: [...] }`                 | Transition Motion des rotations par bouton et clavier. |
| `snapTransition`   | `Record<string, unknown>`                | `{ type: "spring", damping: 30, stiffness: 200 }` | Transition d’aimantation après un glissement.          |
| `dragSpring`       | `CubeCarouselSpringConfig`               | `{ stiffness: 200, damping: 30 }`                 | Ressort utilisé pendant le glissement.                 |
| `autoPlay`         | `boolean`                                | `false`                                           | Avance automatiquement entre les éléments.             |
| `autoPlayInterval` | `number`                                 | `3000`                                            | Délai entre les rotations, en millisecondes.           |
| `onIndexChange`    | `(index: number) => void`                | —                                                 | Appelé à la fin d’une rotation.                        |
| `enableDrag`       | `boolean`                                | `true`                                            | Active le glissement à la souris et au toucher.        |
| `dragSensitivity`  | `number`                                 | `0.5`                                             | Rotation produite par le mouvement du pointeur.        |

### `CubeCarouselItem`

| Propriété | Type                 | Requis | Description                      |
| --------- | -------------------- | ------ | -------------------------------- |
| `id`      | `string`             | Oui    | Identifiant stable de l’élément. |
| `type`    | `"image" \| "video"` | Oui    | Choisit le moteur de rendu.      |
| `src`     | `string`             | Oui    | URL de l’image ou de la vidéo.   |
| `alt`     | `string`             | Non    | Texte alternatif de l’image.     |
| `poster`  | `string`             | Non    | Image poster de la vidéo.        |

## Interaction

Faites glisser le long de l’axe du carrousel pour le faire tourner. Au relâchement, il s’aligne sur le quart de tour le plus proche. Une fois focalisé, utilisez les flèches correspondant à l’axe de rotation. Les méthodes `next`, `prev` et `getCurrentItemIndex` sont également exposées via une ref.

#credits

- Porté depuis [Fancy Components Box Carousel](https://fancycomponents.dev/docs/components/carousel/box-carousel).
- Images de démonstration par [Daniel Petho](https://www.cosmos.so/danielpetho/box-carousel-demo).
- Inspiré par [Framer University](https://framer.university/resources/3d-box-carousel-in-framer).

::
