---
title: Spline
description: Un wrapper Vue pour l'outil 3D Spline, avec événements et redimensionnement automatique.
category: Visualisation
tags: [css, tailwind, spline]
---

::ComponentViewer{demoFile="SplineDemo.vue" config="SplineConfig" componentId="spline" :componentFiles='["Spline.vue", "ParentSize.vue"]' dependencies="@splinetool/runtime"}

#api

## API

| Nom de propriété  | Type       | Valeur par défaut | Description                                                   |
| ----------------- | ---------- | ----------------- | ------------------------------------------------------------- |
| `scene`           | `string`   | —                 | URL ou chemin du fichier de scène Spline. **Requis**.         |
| `onLoad`          | `Function` | `undefined`       | Callback déclenché lorsque la scène Spline est chargée avec succès. |
| `renderOnDemand`  | `boolean`  | `true`            | Active ou désactive l'optimisation de rendu à la demande de Spline. |
| `style`           | `object`   | `{}`              | Styles CSS personnalisés appliqués au conteneur du canvas.     |

**Événements émis**

| Nom de l'événement      | Charge utile | Description                                                   |
| ----------------------- | ------------ | ------------------------------------------------------------- |
| `error`                 | `Error`      | Émis s'il y a une erreur lors du chargement de la scène Spline. |
| `spline-mouse-down`     | `any`        | Émis lorsqu'un événement mouseDown est détecté dans la scène. |
| `spline-mouse-up`       | `any`        | Émis lorsqu'un événement mouseUp est détecté.                 |
| `spline-mouse-hover`    | `any`        | Émis lorsque l'événement mouseHover est déclenché.            |
| `spline-key-down`       | `any`        | Émis lors d'un keyDown dans la scène Spline.                  |
| `spline-key-up`         | `any`        | Émis lors d'un keyUp dans la scène.                           |
| `spline-start`          | `any`        | Émis lorsque la scène Spline démarre.                         |
| `spline-look-at`        | `any`        | Émis lorsqu'un événement lookAt se produit.                   |
| `spline-follow`         | `any`        | Émis lorsqu'un événement follow se produit.                   |
| `spline-scroll`         | `any`        | Émis lors des interactions de défilement.                     |

#credits

- Utilise le runtime de Spline en coulisse.
- Inspiré par diverses expériences web 3D réalisées avec Spline.

::
