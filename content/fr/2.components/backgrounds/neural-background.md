---
title: Fond neuronal
description: Un fond animé dynamique propulsé par shader, avec des visuels fluides de type réseau neuronal, utilisant OGL et GLSL.
category: Arrière-plan
tags: [css, tailwind, background, ogl, webgl, cursify]
---

::ComponentViewer{demoFile="NeuralBgDemo.vue" config="NeuralBgConfig" componentId="bg-neural" :componentFiles='["NeuralBg.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                     |
| ---------------- | -------- | ----------------- | --------------------------------------------------------------- |
| `hue`            | `number` | `200`             | Teinte de base des couleurs de fond (en degrés, 0–360).         |
| `saturation`     | `number` | `0.8`             | Saturation de la couleur de fond (0–1).                         |
| `chroma`         | `number` | `0.6`             | Facteur de chroma/luminosité de la couleur HSL (0-1).           |
| `class`          | `string` | `—`               | Classes CSS optionnelles supplémentaires pour l'élément canvas. |

> 💡 Ce composant utilise par défaut un fond plein écran fixé avec `pointer-events-none`. Vous pouvez surcharger le style via la prop `class` si nécessaire.

#credits

- Construit avec [OGL](https://github.com/oframe/ogl), un framework WebGL minimal.
- Logique mathématique et motifs basés sur des superpositions trigonométriques récursives.
- Porté depuis [Neural Glow Cursor par Cursify](https://cursify.vercel.app/components/neural-glow).

::
