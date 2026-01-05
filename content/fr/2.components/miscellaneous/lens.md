---
title: Loupe
description: Un composant loupe pour zoomer sur des images, vidéos ou tout autre contenu.
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LensDemo.vue" config="LensConfig" componentId="lens" :componentFiles='["Lens.vue", "Rays.vue", "Beams.vue"]'}

#api

## API

| Nom de propriété | Type                       | Valeur par défaut      | Description                                                                  |
| ---------------- | -------------------------- | ---------------------- | ---------------------------------------------------------------------------- |
| `zoomFactor`     | `number`                   | `1.5`                  | Facteur d'agrandissement de la loupe.                                       |
| `lensSize`       | `number`                   | `170`                  | Diamètre de la loupe en pixels.                                             |
| `position`       | `{ x: number, y: number }` | `{ x: 200, y: 150 }`   | Position statique de la loupe (quand `isStatic` est `true`).                |
| `isStatic`       | `boolean`                  | `false`                | Si `true`, la loupe reste fixe ; sinon, elle suit la souris.                |
| `hovering`       | `boolean`                  | `"false"`              | Contrôle externe de l'état de survol.                                       |

#credits

- Merci à [Aceternity UI](https://ui.aceternity.com/components/lens).
- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour le portage de ce composant.

::
