---
title: Visionneuse Shader Toy
description: Un composant puissant et flexible pour rendre des shaders GLSL interactifs de ShaderToy dans le navigateur.
category: Divers
tags: [css, tailwind, shader-toy, ogl, webgl]
---

::ComponentViewer{demoFile="ShaderToyDemo.vue" config="AnimatedCircularProgressBarConfig" componentId="animated-circular-progressbar" :componentFiles='["ShaderToy.vue", "InspiraShaderToy.ts"]' dependencies="ogl"}

#api

## API

| Nom de propriété | Type                 | Valeur par défaut | Description                                               |
| ---------------- | -------------------- | ----------------- | --------------------------------------------------------- |
| `shaderCode`     | `string`             | `-`               | Code source du fragment shader GLSL depuis ShaderToy.     |
| `mouseMode`      | `'click' \| 'hover'` | `'click'`         | Mode de suivi souris : au clic ou en survol continu.      |
| `hue`            | `number`             | `0`               | Ajuste la teinte du rendu du shader.                      |
| `saturation`     | `number`             | `1`               | Ajuste la saturation du rendu du shader.                  |
| `brightness`     | `number`             | `1`               | Ajuste la luminosité du rendu du shader.                  |
| `speed`          | `number`             | `1`               | Ajuste la vitesse d'animation du shader.                  |
| `class`          | `string`             | `-`               | Classes personnalisées à appliquer au conteneur.          |

#credits

- Construit avec [OGL](https://github.com/oframe/ogl).
- Inspiré par [Shadertoy](https://shadertoy.com/) et adapté pour la compatibilité Vue.

::
