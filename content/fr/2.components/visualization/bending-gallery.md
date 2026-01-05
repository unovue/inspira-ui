---
title: Galerie courbée
description: Une galerie 3D incurvée et défilante avec cartes d'images dynamiques et texte animé rendu avec WebGL et OGL.
category: Visualization
tags: [css, tailwind, ogl, webgl]
---

::ComponentViewer{demoFile="BendingGalleryDemo.vue" config="BendingGalleryConfig" componentId="bending-gallery" :componentFiles='["BendingGallery.vue"]' dependencies="ogl"}

#api

## API

| Nom de propriété | Type                                | Valeur par défaut       | Description                                                     |
| ---------------- | ----------------------------------- | ----------------------- | --------------------------------------------------------------- |
| `items`          | `{ image: string; text: string }[]` | `[]`                    | Tableau d'objets contenant les URL d'image et le texte associé. |
| `bend`           | `number`                            | `3`                     | Contrôle la courbure de la galerie. Une valeur plus haute courbe davantage. |
| `textColor`      | `string`                            | `"#ffffff"`             | Couleur du texte affiché sous chaque image.                     |
| `borderRadius`   | `number`                            | `0.05`                  | Rayon des coins des cartes (en espace UV).                      |
| `font`           | `string`                            | `"bold 30px DM Sans"`   | Police utilisée pour le texte sous chaque image.                |

#credits

- Inspiré par [Infinite Circular Gallery de Codrops](https://tympanus.net/Tutorials/InfiniteCircularGallery/).

::
