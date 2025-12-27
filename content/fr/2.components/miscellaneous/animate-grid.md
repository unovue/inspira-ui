---
title: Grille animée
description: Grille animée inclinée avec ombre portée.
category: Divers
tags: [css, tailwind, input]
---

::ComponentViewer{demoFile="AnimateGridDemo.vue" config="AnimateGridConfig" componentId="animate-grid" :componentFiles='["AnimateGrid.vue"]'}

#instructions

#### Ajouter un fichier SVG

Ajoutez au moins un fichier SVG dans le même dossier que votre composant et mettez à jour l'import dans le composant pour l'utiliser.

#api

## API

| Nom de propriété        | Type     | Valeur par défaut   | Description                                         |
| ----------------------- | -------- | ------------------- | --------------------------------------------------- |
| `textGlowStartColor`    | `string` | `"#38ef7d80"`       | Couleur de départ de l'ombre portée.                |
| `textGlowEndColor`      | `string` | `"#38ef7d"`         | Couleur de fin de l'ombre portée.                   |
| `perspective`           | `number` | `600`               | Perspective à appliquer à la propriété CSS transform. |
| `rotateX`               | `number` | `-1`                | Valeur de rotation X pour la propriété transform.   |
| `rotateY`               | `number` | `-15`               | Valeur de rotation Y pour la propriété transform.   |
| `cards`                 | `[]`     | `"[{logo: 'src'}]"` | Cartes à afficher dans la grille.                   |
| `class`                 | `string` | `""`                | Classes Tailwind supplémentaires pour un style personnalisé. |

#credits

- Merci à [SivaReddy Uppathi](https://github.com/sivareddyuppathi) pour ce composant.

::
