---
title: Visionneuse Shader Toy
description: Un composant puissant et flexible pour rendre des shaders GLSL interactifs de ShaderToy dans le navigateur.
category: Miscellaneous
tags: [css, tailwind, shader-toy, ogl, webgl]
badge: Updated
---

::ComponentViewer{demoFile="ShaderToyDemo.vue" config="ShaderToyConfig" componentId="shader-toy" :componentFiles='["ShaderToy.vue", "InspiraShaderToy.ts"]' dependencies="ogl"}

#api

## API

| Nom de propriété | Type                                 | Valeur par défaut | Description                                                |
| ---------------- | ------------------------------------ | ----------------- | ---------------------------------------------------------- |
| `shaderCode`     | `string`                             | `-`               | Code source du fragment shader GLSL depuis ShaderToy.      |
| `uniforms`       | `Record<string, number \| number[]>` | `{}`              | Valeurs des uniforms personnalisés déclarés par le shader. |
| `mouseMode`      | `'click' \| 'hover'`                 | `'click'`         | Mode de suivi souris : au clic ou en survol continu.       |
| `hue`            | `number`                             | `0`               | Ajuste la teinte du rendu du shader.                       |
| `saturation`     | `number`                             | `1`               | Ajuste la saturation du rendu du shader.                   |
| `brightness`     | `number`                             | `1`               | Ajuste la luminosité du rendu du shader.                   |
| `speed`          | `number`                             | `1`               | Ajuste la vitesse d'animation du shader.                   |
| `frameRate`      | `number`                             | `60`              | Limite la fréquence de rendu des shaders plus lourds.      |
| `pixelRatio`     | `number`                             | `1`               | Règle l'échelle du canvas entre qualité et performance.    |
| `paused`         | `boolean`                            | `false`           | Met la lecture en pause manuellement.                      |
| `autoPause`      | `boolean`                            | `true`            | Pause le rendu hors écran ou quand l'onglet est caché.     |
| `class`          | `string`                             | `-`               | Classes personnalisées à appliquer au conteneur.           |

#credits

- Construit avec [OGL](https://github.com/oframe/ogl).
- Inspiré par [Shadertoy](https://shadertoy.com/) et adapté pour la compatibilité Vue.

::
