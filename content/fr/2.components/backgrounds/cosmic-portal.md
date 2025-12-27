---
title: Portail cosmique
description: Un portail 3D animé impressionnant, réalisé avec Three.js, comprenant des anneaux lumineux, des cristaux flottants, une distorsion spatiale et des flux interdimensionnels.
category: Arrière-plan
tags: [css, tailwind, background, threejs, postprocessing]
---

::ComponentViewer{demoFile="CosmicPortalDemo.vue" config="CosmicPortalConfig" componentId="cosmic-portal" :componentFiles='["CosmicPortal.vue"]' dependencies="three postprocessing" devDependencies="@types/three"}

#api

## API

| Nom de propriété    | Type     | Valeur par défaut | Description                                                 |
| ------------------- | -------- | ----------------- | ----------------------------------------------------------- |
| `portalComplexity`  | `number` | `4`               | Contrôle la complexité des effets et de la géométrie du portail. |
| `crystalCount`      | `number` | `12`              | Nombre de cristaux flottants dans la scène.                 |
| `primaryColor`      | `string` | `#9b59b6`         | Couleur principale pour le portail et la lueur d'arrière-plan. |
| `secondaryColor`    | `string` | `#3498db`         | Couleur secondaire pour le mélange et la lueur.             |
| `accentColor`       | `string` | `#e74c3c`         | Couleur utilisée pour l'énergie et les reflets du portail.  |
| `vortexColor`       | `string` | `#2ecc71`         | Couleur utilisée pour le vortex et les flux dimensionnels.  |
| `rotationSpeed`     | `number` | `0.3`             | Vitesse de rotation des éléments.                           |
| `bloomStrength`     | `number` | `1.2`             | Intensité du bloom en post-traitement.                      |
| `bloomRadius`       | `number` | `0.7`             | Rayon de l'effet de bloom.                                  |
| `bloomThreshold`    | `number` | `0.2`             | Seuil de visibilité du bloom.                               |
| `dimensionShift`    | `number` | `4`               | Niveau de distorsion dimensionnelle pour l'animation shader. |

#credits

- Inspiré et porté depuis [Dimensional Portal par Techartist](https://x.com/techartist_).

::
