---
title: Badge d'images
description: Un badge avec des images sur lequel on peut survoler pour révéler d'autres images.
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ImagesBadgeDemo.vue" config="ImagesBadgeConfig" componentId="images-badge" :componentFiles='["ImagesBadge.vue"]'}

#api

## API

| Nom de la prop    | Type                                | Défaut                      | Description                                                                          |
| ----------------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| `text`            | `string`                            | —                           | Étiquette texte affichée à côté du badge dossier.                                    |
| `images`          | `string[]`                          | —                           | Tableau d'URLs d'images à afficher (jusqu'à 3 sont montrées).                        |
| `class`           | `string`                            | —                           | Classes CSS supplémentaires pour l'élément racine.                                   |
| `href`            | `string`                            | —                           | URL de lien optionnelle ; rend une balise `<a>` au lieu de `<div>` si fournie.       |
| `target`          | `string`                            | —                           | Attribut target du lien (ex. `_blank` pour un nouvel onglet).                        |
| `folderSize`      | `{ width: number; height: number }` | `{ width: 32, height: 24 }` | Dimensions de l'icône dossier en pixels.                                             |
| `teaserImageSize` | `{ width: number; height: number }` | `{ width: 20, height: 14 }` | Dimensions des images en état d'aperçu (état inactif) en pixels.                    |
| `hoverImageSize`  | `{ width: number; height: number }` | `{ width: 48, height: 32 }` | Dimensions des images au survol en pixels.                                           |
| `hoverTranslateY` | `number`                            | `-35`                       | Distance de déplacement vers le haut des images au survol en pixels.                 |
| `hoverSpread`     | `number`                            | `20`                        | Écart horizontal entre les images au survol en pixels.                               |
| `hoverRotation`   | `number`                            | `15`                        | Angle de rotation en éventail des images au survol en degrés.                        |

#credits

- Porté depuis [Aceternity UI Images Badge](https://ui.aceternity.com/components/images-badge)

::
