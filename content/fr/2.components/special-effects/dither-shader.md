---
title: Shader de tramage
description: Effet de tramage ordonné en temps réel pour les images, idéal pour le pixel art et les esthétiques rétro.
category: Effets spéciaux
tags: [tailwind, background, card, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="DitherShaderDemo.vue" config="DitherShaderConfig" componentId="dither-shader" :componentFiles='["DitherShader.vue"]'}

#api

## API

| Nom de propriété  | Type                                                 | Valeur par défaut        | Description                                                                                     |
| ----------------- | ---------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------- |
| `src`             | `string`                                             | `-`                      | URL de l'image source.                                                                          |
| `gridSize`        | `number`                                             | `4`                      | Taille des cellules de la grille de tramage.                                                    |
| `ditherMode`      | `"bayer" \| "halftone" \| "noise" \| "crosshatch"`   | `"bayer"`                | Type de motif de tramage.                                                                       |
| `colorMode`       | `"original" \| "grayscale" \| "duotone" \| "custom"` | `"original"`             | Mode de traitement des couleurs.                                                                |
| `invert`          | `boolean`                                            | `false`                  | Inverse les couleurs du rendu tramé.                                                            |
| `pixelRatio`      | `number`                                             | `1`                      | Multiplicateur de pixelisation (1 = pas de pixelisation, plus haut = plus pixelisé).            |
| `primaryColor`    | `string`                                             | `"#000000"`              | Couleur primaire pour le mode duo.                                                              |
| `secondaryColor`  | `string`                                             | `"#ffffff"`              | Couleur secondaire pour le mode duo.                                                            |
| `customPalette`   | `string[]`                                           | `["#000000", "#ffffff"]` | Palette personnalisée pour le mode personnalisé.                                                |
| `brightness`      | `number`                                             | `0`                      | Ajustement de la luminosité (-1 à 1).                                                           |
| `contrast`        | `number`                                             | `1`                      | Ajustement du contraste (0 à 2, 1 = normal).                                                    |
| `backgroundColor` | `string`                                             | `"transparent"`          | Couleur de fond derrière l'image tramée.                                                        |
| `objectFit`       | `"cover" \| "contain" \| "fill" \| "none"`           | `"cover"`                | Comportement d'ajustement de l'image.                                                           |
| `threshold`       | `number`                                             | `0.5`                    | Biais de seuil pour le tramage (0 à 1).                                                         |
| `animated`        | `boolean`                                            | `false`                  | Active l'effet animé.                                                                           |
| `animationSpeed`  | `number`                                             | `0.02`                   | Vitesse de l'animation (plus bas = plus lent).                                                  |
| `class`           | `string`                                             | `-`                      | Classes CSS supplémentaires pour le conteneur (à utiliser pour définir la taille via Tailwind). |

#credits

- Inspiré et porté depuis [Aceternity UI Dither Shader](https://ui.aceternity.com/components/dither-shader).

::
