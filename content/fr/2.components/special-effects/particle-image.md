---
title: Image en particules
description: Une animation de particules appliquée aux images, comme sur NuxtLabs.com.
category: Effets spéciaux
tags: [css, tailwind, canvas, particles]
---

::ComponentViewer{demoFile="ParticleImageDemo.vue" config="ParticleImageConfig" componentId="particle-image" :componentFiles='["ParticleImage.vue", "inspiraImageParticles.js", "inspiraImageParticles.d.ts"]'}

#api

## API

| Nom de propriété  | Type                                                                          | Valeur par défaut | Description                                                                       |
| ----------------- | ----------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| `imageSrc`        | `string`                                                                      | `null`            | URL source de l'image à laquelle appliquer l'effet de particules.                |
| `class`           | `string`                                                                      | `null`            | Classes CSS supplémentaires à appliquer à l'élément image.                        |
| `canvasWidth`     | `string`                                                                      | `null`            | Largeur du canvas de l'effet de particules.                                       |
| `canvasHeight`    | `string`                                                                      | `null`            | Hauteur du canvas de l'effet de particules.                                       |
| `gravity`         | `string`                                                                      | `null`            | Force de gravité influençant le mouvement des particules.                         |
| `particleSize`    | `string`                                                                      | `null`            | Taille des particules.                                                            |
| `particleGap`     | `string`                                                                      | `null`            | Espace entre les particules.                                                      |
| `mouseForce`      | `string`                                                                      | `null`            | Force appliquée aux particules selon les mouvements de la souris.                 |
| `renderer`        | `"default" \| "webgl"`                                                        | `null`            | Moteur de rendu des particules, par défaut ou WebGL.                              |
| `color`           | `string`                                                                      | `#FFF`            | Code couleur hexadécimal utilisé pour les particules (3 ou 6 caractères).         |
| `colorArr`        | `number[]`                                                                    | `null`            | Tableau de nombres définissant plusieurs couleurs de particules.                  |
| `initPosition`    | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "misplaced" \| "none"` | `random`          | Position initiale des particules au démarrage de l'animation.                     |
| `initDirection`   | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `random`          | Direction initiale des particules au démarrage.                                   |
| `fadePosition`    | `"explode" \| "top" \| "left" \| "bottom" \| "right" \| "random" \| "none"`   | `none`            | Position où les particules se dissipent.                                          |
| `fadeDirection`   | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `none`            | Direction dans laquelle les particules se dissipent.                              |
| `noise`           | `number`                                                                      | `null`            | Niveau de bruit appliqué aux particules.                                          |
| `responsiveWidth` | `boolean`                                                                     | `false`           | Indique si le canvas doit être responsive.                                        |

#credits

- Merci à [Nuxt Labs](https://nuxtlabs.com) pour l'inspiration.
- Merci à [NextParticles](https://nextparticle.nextco.de) pour la base de la librairie d'animation.

::
