---
title: Fond orageux
description: Un fond basé sur un shader, inspiré d'un orage dans les nuages.
category: Background
tags: [css, tailwind, background, shader-toy, webgl, ogl]
badge: New
---

::ComponentViewer{demoFile="ThunderstormBackgroundDemo.vue" config="ThunderstormBackgroundConfig" componentId="bg-thunderstorm" :componentFiles='["ThunderstormBackground.vue"]'}

#api

## API

| Nom de propriété   | Type     | Valeur par défaut | Description                                                            |
| ------------------ | -------- | ----------------- | ---------------------------------------------------------------------- |
| `hue`              | `number` | `0`               | Teinte de base pour la texture fractale (0–360 degrés).                |
| `saturation`       | `number` | `1`               | Saturation de la couleur (0–1).                                        |
| `brightness`       | `number` | `1`               | Multiplicateur de luminosité de la sortie (0–2 recommandé).            |
| `speed`            | `number` | `1`               | Multiplicateur de vitesse de l'animation.                              |
| `mouseSensitivity` | `number` | `0.5`             | Contrôle la réactivité aux mouvements de la souris (0–5).              |
| `damping`          | `number` | `1`               | Facteur d'amortissement pour lisser les déformations de texture (0–1). |
| `class`            | `string` | `-`               | Classes CSS supplémentaires pour le conteneur div (ex. z-index, etc.). |

> 💡 Ce composant est conçu pour être utilisé sur des fonds plein écran ou de larges sections. Il est optimisé pour les GPU modernes mais peut être exigeant sur les appareils plus modestes.

#credits

- Adapté depuis [ce shader ShaderToy](https://www.shadertoy.com/view/W3d3z7).

::
