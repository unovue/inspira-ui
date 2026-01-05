---
title: Fond bulles
description: Un fond animé avec des bulles flottantes.
category: Background
tags: [css, tailwind, background, threejs]
---

::ComponentViewer{demoFile="BubblesBgDemo.vue" config="BubblesBgConfig" componentId="bg-bubbles" :componentFiles='["BubblesBg.vue"]' dependencies="three" devDependencies="@types/three"}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                       |
| ---------------- | -------- | ----------------- | ----------------------------------------------------------------- |
| `blur`           | `number` | `0`               | Niveau de flou appliqué au fond, en pixels.                       |

#credits

- Réalisé avec la bibliothèque [Three.js](https://threejs.org/) pour le rendu et les animations 3D.
- Inspiré de l'[expérience Tresjs](https://lab.tresjs.org/experiments/overlay).

::
