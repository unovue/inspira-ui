---
title: Marquee sur chemin
description: Déplacez du contenu répété le long d’un chemin SVG avec ralentissement au survol et glissement.
category: Miscellaneous
tags: [svg, motion-v, marquee, drag]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="PathMarqueeDemo.vue" config="PathMarqueeConfig" componentId="path-marquee" :componentFiles='["PathMarquee.vue", "index.ts"]'}

#api

## API

| Prop                       | Type                        | Valeur par défaut                 | Description                                        |
| -------------------------- | --------------------------- | --------------------------------- | -------------------------------------------------- |
| `path`                     | `string`                    | —                                 | Données du chemin SVG utilisé pour les éléments.   |
| `pathId`                   | `string`                    | Généré                            | ID attribué au chemin SVG.                         |
| `showPath`                 | `boolean`                   | `false`                           | Afficher le tracé du chemin.                       |
| `width`                    | `string \| number`          | `"100%"`                          | Largeur du SVG.                                    |
| `height`                   | `string \| number`          | `"100%"`                          | Hauteur du SVG.                                    |
| `viewBox`                  | `string`                    | `"0 0 100 100"`                   | Système de coordonnées SVG.                        |
| `preserveAspectRatio`      | `string`                    | `"xMidYMid meet"`                 | Comportement du ratio SVG.                         |
| `baseVelocity`             | `number`                    | `5`                               | Vitesse du mouvement automatique.                  |
| `direction`                | `"normal" \| "reverse"`     | `"normal"`                        | Direction initiale du mouvement.                   |
| `easing`                   | `(value: number) => number` | —                                 | Fonction d’assouplissement de la progression.      |
| `slowdownOnHover`          | `boolean`                   | `false`                           | Ralentir le mouvement au survol.                   |
| `slowDownFactor`           | `number`                    | `0.3`                             | Multiplicateur de vitesse au survol.               |
| `slowDownSpringConfig`     | `object`                    | `{ damping: 50, stiffness: 400 }` | Ressort du ralentissement au survol.               |
| `useScrollVelocity`        | `boolean`                   | `false`                           | Ajouter la vitesse de défilement au mouvement.     |
| `scrollAwareDirection`     | `boolean`                   | `false`                           | Suivre la direction du dernier défilement.         |
| `scrollSpringConfig`       | `object`                    | `{ damping: 50, stiffness: 400 }` | Ressort de la vitesse de défilement.               |
| `repeat`                   | `number`                    | `3`                               | Nombre de répétitions du contenu du slot.          |
| `draggable`                | `boolean`                   | `false`                           | Autoriser le glissement le long du chemin.         |
| `dragSensitivity`          | `number`                    | `0.2`                             | Multiplicateur appliqué à la vitesse de drag.      |
| `dragVelocityDecay`        | `number`                    | `0.96`                            | Décroissance de l’inertie après le drag.           |
| `dragAwareDirection`       | `boolean`                   | `false`                           | Suivre automatiquement la dernière direction.      |
| `grabCursor`               | `boolean`                   | `false`                           | Utiliser les curseurs grab avec le drag.           |
| `enableRollingZIndex`      | `boolean`                   | `true`                            | Empiler les éléments selon leur position.          |
| `zIndexBase`               | `number`                    | `1`                               | Valeur de z-index initiale.                        |
| `zIndexRange`              | `number`                    | `10`                              | Plage de z-index utilisée.                         |
| `cssVariableInterpolation` | `object[]`                  | `[]`                              | Interpoler des variables CSS selon la progression. |
| `responsive`               | `boolean`                   | `false`                           | Adapter l’espace de coordonnées au conteneur.      |
| `class`                    | `string`                    | —                                 | Classes supplémentaires fusionnées sur la racine.  |

Passez un ou plusieurs éléments via le slot par défaut. Chaque élément est répété et positionné sur le chemin.

#credits

- Porté depuis [Fancy Components Marquee Along SVG Path](https://fancycomponents.dev/docs/components/blocks/marquee-along-svg-path).

::
