---
title: Globe Github
description: Une visualisation 3D interactive d'un globe avec arcs, points et options d'animation personnalisables, inspirée de Github.
category: Visualisation
tags: [css, tailwind, threejs, aceternity-ui]
badge: Mise à jour
---

::ComponentViewer{demoFile="GithubGlobeDemo.vue" config="GithubGlobeConfig" componentId="github-globe" :componentFiles='["GithubGlobe.vue"]' dependencies="three postprocessing three-globe" devDependencies="@types/three"}

#api

#### Télécharger le fichier GeoJSON

Téléchargez un fichier GeoJSON contenant les données géographiques du globe depuis [GeoJSON Maps](https://geojson-maps.kyd.au/) en personnalisant les continents et le niveau de détail. Enregistrez le fichier téléchargé sous le nom `globe.json` dans le même dossier que votre composant.

## API

| Nom de propriété | Type         | Valeur par défaut | Description                                                                                         |
| ---------------- | ------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| `globeConfig`    | `object`     | `{}`              | Options de configuration du globe : couleurs, atmosphère, vitesse de rotation, éclairage, etc.      |
| `data`           | `Position[]` | `[]`              | Tableau de positions représentant arcs et points (latitude, longitude, couleur, etc.).              |
| `class`          | `string`     | `""`              | Classes CSS supplémentaires pour un style personnalisé.                                             |

### Propriétés `globeConfig`

| Propriété             | Type      | Valeur par défaut         | Description                                              |
| --------------------- | --------- | ------------------------- | -------------------------------------------------------- |
| `pointSize`           | `number`  | `1`                       | Taille des points sur le globe.                          |
| `globeColor`          | `string`  | `"#1d072e"`               | Couleur de la surface du globe.                          |
| `showAtmosphere`      | `boolean` | `true`                    | Affiche ou non l'atmosphère autour du globe.             |
| `atmosphereColor`     | `string`  | `"#ffffff"`               | Couleur de l'atmosphère.                                 |
| `atmosphereAltitude`  | `number`  | `0.1`                     | Altitude de la couche atmosphérique.                     |
| `emissive`            | `string`  | `"#000000"`               | Couleur émissive du matériau du globe.                   |
| `emissiveIntensity`   | `number`  | `0.1`                     | Intensité de la couleur émissive.                        |
| `shininess`           | `number`  | `0.9`                     | Brillance du matériau du globe.                          |
| `polygonColor`        | `string`  | `rgba(255,255,255,0.7)`   | Couleur des frontières des polygones sur le globe.       |
| `arcTime`             | `number`  | `2000`                    | Durée de l'animation des arcs.                           |
| `arcLength`           | `number`  | `0.9`                     | Longueur des arcs sur le globe.                          |
| `rings`               | `number`  | `1`                       | Nombre d'anneaux affichés par point.                     |
| `maxRings`            | `number`  | `3`                       | Nombre maximal d'anneaux autour de chaque point.         |
| `initialPosition`     | `object`  | `{ lat: 0, lng: 0 }`      | Latitude et longitude initiales du globe.                |
| `autoRotate`          | `boolean` | `false`                   | Active la rotation automatique du globe.                 |
| `autoRotateSpeed`     | `number`  | `0.8`                     | Vitesse de rotation automatique lorsqu'elle est activée. |

### Structure `data` (Position)

| Champ       | Type     | Description                                         |
| ----------- | -------- | --------------------------------------------------- |
| `order`     | `number` | Ordre du point ou de l'arc pour le séquencement.    |
| `startLat`  | `number` | Latitude de départ d'un arc.                        |
| `startLng`  | `number` | Longitude de départ d'un arc.                       |
| `endLat`    | `number` | Latitude d'arrivée d'un arc.                        |
| `endLng`    | `number` | Longitude d'arrivée d'un arc.                       |
| `arcAlt`    | `number` | Altitude de l'arc (détermine sa hauteur).           |
| `color`     | `string` | Couleur de l'arc ou du point (hex ou RGB).          |

#credits

- Construit avec Three.js et Three Globe, conçu pour des visualisations globales et effets dynamiques.
- Porté depuis [Aceternity UI](https://ui.aceternity.com/components/github-globe).

::
