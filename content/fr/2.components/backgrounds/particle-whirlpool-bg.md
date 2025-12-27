---
title: Tourbillon de particules
description: Un fond animé avec des particules tourbillonnantes.
category: Arrière-plan
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="ParticleWhirlpoolBgDemo.vue" config="ParticleWhirlpoolBgConfig" componentId="bg-particle-whirlpool" :componentFiles='["ParticleWhirlpoolBg.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                       |
| ---------------- | -------- | ----------------- | ----------------------------------------------------------------- |
| `class`          | `string` | `""`              | Classes CSS supplémentaires pour un style personnalisé.           |
| `blur`           | `number` | `0`               | Niveau de flou appliqué au fond, en pixels.                       |
| `particleCount`  | `number` | `2000`            | Nombre de particules dans l'animation de tourbillon.              |

#credits

- Réalisé avec la bibliothèque [Three.js](https://threejs.org/) pour le rendu et les animations 3D.
- Inspiré par [TroisJs](https://troisjs.github.io/examples/demos/3.html)

::
