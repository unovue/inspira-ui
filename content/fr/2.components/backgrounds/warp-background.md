---
title: Fond Warp
description: Un composant conteneur qui applique un effet de warp animé à ses enfants.
category: Arrière-plan
tags: [css, tailwind, background, magic-ui]
---

::ComponentViewer{demoFile="WarpBackgroundDemo.vue" config="WarpBackgroundConfig" componentId="warp-background" :componentFiles='["WarpBackground.vue", "Beam.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut        | Description                                   |
| ---------------- | -------- | ------------------------ | --------------------------------------------- |
| `perspective`    | `number` | `100`                    | Perspective de l'animation warp.              |
| `beamsPerSide`   | `number` | `3`                      | Nombre de rayons par côté.                    |
| `beamSize`       | `number` | `5`                      | Taille des rayons.                            |
| `beamDelayMax`   | `number` | `3`                      | Délai maximum des rayons, en secondes.        |
| `beamDelayMin`   | `number` | `0`                      | Délai minimum des rayons, en secondes.        |
| `beamDuration`   | `number` | `3`                      | Durée d'animation des rayons.                 |
| `gridColor`      | `string` | `"hsl(var(--border))"`   | Couleur des lignes de la grille.              |

#credits

- Merci à [Whbbit1999](https://github.com/Whbbit1999) pour ce composant.
- Inspiré et porté depuis [Magic UI WarpBackground](https://magicui.design/docs/components/warp-background).

::
