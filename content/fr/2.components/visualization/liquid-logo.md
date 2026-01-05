---
title: Logo liquide
description: Un composant avancé basé sur WebGL qui applique un effet liquide dynamique à des logos ou images via des shaders personnalisés.
category: Visualization
tags: [css, tailwind, webgl, paper]
---

::ComponentViewer{demoFile="LiquidLogoDemo.vue" config="LiquidLogoConfig" componentId="liquid-logo" :componentFiles='["LiquidLogo.vue", "parseLogoImage.ts", "shader.ts"]' }

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                      |
| ---------------- | -------- | ----------------- | ------------------------------------------------ |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé. |
| `imageUrl`       | `string` | `""`              | URL de l'image sur laquelle appliquer l'effet liquide. |
| `patternScale`   | `number` | `2`               | Échelle du motif de distorsion.                   |
| `refraction`     | `number` | `0.015`           | Niveau de réfraction appliqué à l'image.          |
| `edge`           | `number` | `0.4`             | Netteté de l'effet de bord.                      |
| `patternBlur`    | `number` | `0.005`           | Flou appliqué au motif.                          |
| `liquid`         | `number` | `0.07`            | Intensité de l'animation liquide.                |
| `speed`          | `number` | `0.3`             | Vitesse d'animation de l'effet liquide.          |

#credits

- Inspiré par le design Fluid Motion d'Apple.
- Porté et amélioré depuis [Paper Design Concept](https://github.com/paper-design/liquid-logo).

::
