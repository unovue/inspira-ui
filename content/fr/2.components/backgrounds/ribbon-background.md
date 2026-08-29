---
title: Arrière-plan Ruban
description: Un arrière-plan animé en rubans superposés avec couleurs, rotation et transparence configurables.
category: Background
tags: [css, tailwind, background, shader-toy, ogl, webgl]
badge: New
---

::ComponentViewer{demoFile="RibbonBackgroundDemo.vue" config="RibbonBackgroundConfig" componentId="ribbon-background" :componentFiles='["RibbonBackground.vue"]'}

#api

## API

| Nom de propriété  | Type       | Valeur par défaut                                         | Description                                                         |
| ----------------- | ---------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| `colors`          | `string[]` | `['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b']` | Cinq couleurs hexadécimales CSS utilisées par les rubans.           |
| `backgroundColor` | `string`   | `'#282828'`                                               | Couleur hexadécimale CSS affichée derrière les rubans.              |
| `transparent`     | `boolean`  | `false`                                                   | Rend les pixels du fond vide avec une valeur alpha de `0`.          |
| `enableShadows`   | `boolean`  | `true`                                                    | Active les ombres entre les couches de rubans superposées.          |
| `angle`           | `number`   | `0`                                                       | Fait pivoter l'ensemble des rubans en degrés.                       |
| `offsetX`         | `number`   | `0`                                                       | Déplace les rubans horizontalement en unités de viewport.           |
| `offsetY`         | `number`   | `0`                                                       | Déplace les rubans verticalement en unités de viewport.             |
| `speed`           | `number`   | `1`                                                       | Multiplie la vitesse d'animation.                                   |
| `class`           | `string`   | `—`                                                       | Classes supplémentaires appliquées à l'élément externe plein cadre. |

Le composant remplit son parent positionné le plus proche. Donnez au parent une hauteur explicite et `position: relative`.

#credits

- Rendu avec la visionneuse Shader Toy d'Inspira UI et [OGL](https://github.com/oframe/ogl).

::
