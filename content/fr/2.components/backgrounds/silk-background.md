---
title: Fond soyeux
description: Un fond doux et fluide propulsé par shader, inspiré du mouvement et de la texture de la soie, rendu avec ShaderToy.
category: Arrière-plan
tags: [css, tailwind, background, shader-toy, ogl, webgl]
badge: Nouveau
---

::ComponentViewer{demoFile="SilkBackgroundDemo.vue" config="SilkBackgroundConfig" componentId="bg-silk" :componentFiles='["SilkBackground.vue"]'}

#api

## API

| Nom de propriété | Type     | Valeur par défaut | Description                                                                 |
| ---------------- | -------- | ----------------- | --------------------------------------------------------------------------- |
| `hue`            | `number` | `300`             | Teinte de base de la texture soyeuse (en degrés, 0–360).                    |
| `saturation`     | `number` | `0.5`             | Saturation de la couleur (0–1).                                             |
| `brightness`     | `number` | `1`               | Multiplicateur de luminosité de la couleur de sortie (0–2 recommandé).      |
| `speed`          | `number` | `1`               | Multiplicateur de vitesse d'animation (ex. `2` = deux fois plus rapide).    |
| `class`          | `string` | `—`               | Classes CSS optionnelles pour la div conteneur (z-index, etc.).             |

> 💡 Ce composant utilise par défaut un conteneur absolu plein écran. Vous pouvez surcharger la position ou l'empilement via la prop `class`.

#credits

- Adapté de [ce shader ShaderToy](https://www.shadertoy.com/view/X3yXRd) par Giorgi Azmaipharashvili (licence MIT).
- Inspiré par les textures de soie et les motifs de mouvement fluides des matériaux organiques.

::
