---
title: Dock
description: Un dock façon macOS avec agrandissement des icônes au survol.
category: Divers
tags: [css, tailwind]
---

::ComponentViewer{demoFile="DockDemo.vue" config="DockConfig" componentId="dock" :componentFiles='["Dock.vue", "DockIcon.vue", "DockSeparator.vue", "index.ts", "types.ts", "injectionKeys.ts"]'}

#api

## API

### `Dock`

| Nom de propriété | Type     | Description                                                           |
| ---------------- | -------- | --------------------------------------------------------------------- |
| `class`          | `string` | Classes supplémentaires à appliquer au conteneur du dock.             |
| `magnification`  | `number` | Facteur d'agrandissement des icônes au survol (par défaut : 60).     |
| `distance`       | `number` | Distance depuis le centre de l'icône à laquelle l'agrandissement s'applique. |
| `direction`      | `string` | Alignement des icônes (`top`, `middle`, `bottom`) (par défaut : middle). |
| `orientation`    | `string` | Orientation du dock (`vertical`, `horizontal`) (par défaut : horizontal). |

| Nom du slot | Description                                          |
| ----------- | ---------------------------------------------------- |
| `default`   | Icônes du dock ou autres composants enfants à afficher. |

### `DockIcon`

| Nom du slot | Description                                               |
| ----------- | --------------------------------------------------------- |
| `default`   | Composant ou icône à afficher à l'intérieur de l'icône du dock. |

#credits

- Merci au dock macOS pour l'inspiration et son effet d'agrandissement iconique.

::
