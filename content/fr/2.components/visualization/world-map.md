---
title: Carte du monde
description: Affiche une carte du monde personnalisable avec des arcs animés et des effets de pulsation sur les points géographiques.
category: Visualization
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="WorldMapDemo.vue" config="WorldMapConfig" componentId="world-map" :componentFiles='["WorldMap.vue"]' dependencies="dotted-map"}

#api

## API

| Nom de propriété | Type                                                                                                                 | Valeur par défaut | Description                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------- |
| `dots`           | `Array<{ start: { lat: number; lng: number; label?: string }, end: { lat: number; lng: number; label?: string } }> ` | `[]`              | Tableau d'objets contenant coordonnées de départ et d'arrivée (latitude, longitude).    |
| `class`          | `string`                                                                                                             | `""`              | Classes CSS supplémentaires pour un style personnalisé.                                 |
| `lineColor`      | `string`                                                                                                             | `"#0EA5E9"`       | Couleur des arcs et des bordures des points.                                            |
| `mapColor`       | `string`                                                                                                             | —                 | Couleur principale de la carte en points. (**Requise**)                                 |
| `mapBgColor`     | `string`                                                                                                             | —                 | Couleur de fond de la carte. (**Requise**)                                              |

#credits

- Porté depuis (World Map by Aceternity UI)[https://ui.aceternity.com/components/world-map].

::
