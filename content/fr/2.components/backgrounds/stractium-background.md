---
title: Fond Stractium
description: Un fond basé sur des shaders, inspiré de motifs fractals complexes et de textures organiques, créé avec du raymarching et du GLSL. L'effet simule des textures visuelles évolutives et détaillées.
category: Arrière-plan
tags: [css, tailwind, background, shader-toy, webgl, ogl]
badge: Nouveau
---

::ComponentViewer{demoFile="StractiumBackgroundDemo.vue" config="StractiumBackgroundConfig" componentId="bg-stractium" :componentFiles='["StractiumBackground.vue"]'}

#api

## API

| Nom de propriété    | Type     | Valeur par défaut | Description                                                                 |
| ------------------- | -------- | ----------------- | --------------------------------------------------------------------------- |
| `hue`               | `number` | `0`               | Teinte de base pour la texture fractale (0–360 degrés).                     |
| `saturation`        | `number` | `1`               | Saturation de la couleur (0–1).                                             |
| `brightness`        | `number` | `1`               | Multiplicateur de luminosité de la couleur de sortie (0–2 recommandé).      |
| `speed`             | `number` | `1`               | Multiplicateur de vitesse pour l'animation de texture.                      |
| `mouseSensitivity`  | `number` | `0.5`             | Contrôle la réactivité de la texture aux mouvements de souris (0–1).        |
| `damping`           | `number` | `1`               | Facteur d'amortissement pour lisser les distorsions de texture (0–1).       |
| `class`             | `string` | `—`               | Classes CSS optionnelles pour la div conteneur (z-index, etc.).             |

> 💡 Ce composant est pensé pour des fonds plein écran ou de grandes sections. Il est optimisé pour les GPU modernes mais peut être exigeant sur les appareils plus modestes.

#credits

- Basé sur un fragment shader ShaderToy du créateur original des motifs fractals (licence MIT).
- Intégré dans un composant Vue et adapté pour accepter des entrées dynamiques via des props.
- Inspiré par les motifs fractals, les textures naturelles et les techniques avancées de raymarching.

::
