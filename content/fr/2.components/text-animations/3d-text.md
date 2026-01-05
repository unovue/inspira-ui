---
title: Texte 3D
description: Un composant de texte 3D élégant avec couleurs, ombres et options d'animation personnalisables.
category: Text Animation
tags: [css, tailwind, 3d]
---

::ComponentViewer{demoFile="Text3dDemo.vue" config="Text3dConfig" componentId="text-3d" :componentFiles='["Text3d.vue"]'}

#api

## API

| Nom de propriété   | Type      | Valeur par défaut | Description                                         |
| ------------------ | --------- | ----------------- | --------------------------------------------------- |
| `textColor`        | `string`  | `"white"`         | Couleur du texte principal.                         |
| `letterSpacing`    | `number`  | `-0.1`            | Ajuste l'espacement des lettres en unités `ch`.     |
| `strokeColor`      | `string`  | `"black"`         | Couleur du contour du texte.                        |
| `shadowColor`      | `string`  | `"yellow"`        | Couleur de l'ombre du texte.                        |
| `strokeSize`       | `number`  | `20`              | Épaisseur du contour en pixels.                     |
| `shadow1Size`      | `number`  | `7`               | Taille de la première couche d'ombre, en pixels.    |
| `shadow2Size`      | `number`  | `10`              | Taille de la seconde couche d'ombre, en pixels.     |
| `class`            | `string`  | `""`              | Classes CSS supplémentaires pour un style personnalisé. |
| `animate`          | `boolean` | `true`            | Active l'animation de balancement lorsqu'à `true`.  |
| `animationDuration`| `number`  | `1500`            | Durée de l'animation en millisecondes.              |

::
