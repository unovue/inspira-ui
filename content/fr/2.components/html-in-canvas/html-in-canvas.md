---
title: HTML in Canvas
description: Appliquez un fragment shader de style ShaderToy à du HTML en direct grâce à l'API expérimentale HTML-in-Canvas.
category: HTML in Canvas
tags: [webgl, shader, canvas, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlInCanvasDemo.vue" config="HtmlInCanvasConfig" componentId="html-in-canvas" :componentFiles='["HtmlInCanvas.vue", "HtmlInCanvasRenderer.ts", "captureElement.ts", "index.ts"]'}

HTML in Canvas est une API expérimentale. Lorsqu'elle n'est pas disponible, le composant capture un instantané stylé du DOM et le traite avec le même shader WebGL. Le DOM original reste disponible pour les interactions et l'accessibilité.

Le fragment shader doit définir `mainImage(out vec4 fragColor, in vec2 fragCoord)`. Le HTML capturé est accessible via `iChannel0`.

Utilisez `HtmlLiquid`, `HtmlChromatic`, `HtmlAscii`, `HtmlCloth`, `HtmlBlaze` ou `HtmlDrag` pour une API d'effet ciblée et typée. Chaque composant confie le rendu et le mode de secours à ce moteur partagé.

Utilisez `vertexShaderCode` lorsque l'effet nécessite aussi une logique au niveau du vertex shader. Il doit définir `main()` sans directive `#version`. La surface segmentée expose les attributs intégrés `vec2 position` et `vec2 textureCoord`, et les mêmes uniforms sont disponibles dans les deux étapes.

#api

## API

| Prop               | Type             | Défaut  | Description                                                    |
| ------------------ | ---------------- | ------- | -------------------------------------------------------------- |
| `shaderCode`       | `string`         | —       | Code du fragment shader contenant une fonction `mainImage`.    |
| `vertexShaderCode` | `string`         | —       | Code optionnel du vertex shader contenant une fonction `main`. |
| `uniforms`         | `ShaderUniforms` | `{}`    | Uniforms numériques, booléens, vectoriels ou matriciels.       |
| `frameRate`        | `number`         | `60`    | Fréquence de rendu maximale.                                   |
| `pixelRatio`       | `number`         | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.                 |
| `speed`            | `number`         | `1`     | Multiplicateur appliqué à `iTime`.                             |
| `mouseDamping`     | `number`         | `0.85`  | Lissage appliqué au déplacement du pointeur.                   |
| `paused`           | `boolean`        | `false` | Met la boucle de rendu en pause.                               |
| `autoPause`        | `boolean`        | `true`  | Met en pause hors écran ou lorsque le document est masqué.     |
| `interactive`      | `boolean`        | `true`  | Suit le pointeur pour alimenter `iMouse`.                      |
| `class`            | `string`         | —       | Classes supplémentaires fusionnées sur l'élément racine.       |

### Entrées du shader

`iResolution`, `iTime`, `iTimeDelta`, `iFrameRate`, `iFrame`, `iMouse`, `iDate`, `iHasContent`, `iChannel0` et `iChannelResolution` suivent les conventions ShaderToy. `iPointerVelocity`, `iPointerEnergy` et `iPointerAge` fournissent une impulsion amortie pour les effets qui doivent se stabiliser après le mouvement. `iPointerInside` évolue entre `0` et `1` lorsque le pointeur quitte ou entre dans la surface. `iScrollVelocity` fournit une vitesse verticale amortie pour déformer les sommets au défilement. `iHasContent` vaut `1` lorsque la texture HTML est disponible.

### Événements

| Événement | Charge utile | Description                                        |
| --------- | ------------ | -------------------------------------------------- |
| `ready`   | —            | Émis après le premier rendu de la texture HTML.    |
| `error`   | `string`     | Émis en cas d'échec de compilation ou de rendu.    |
| `support` | `boolean`    | Indique la disponibilité native de HTML-in-Canvas. |

### Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Contenu HTML capturé comme texture du shader. |

#credits

- Construit à partir de la [proposition WICG HTML-in-Canvas](https://github.com/WICG/html-in-canvas).

::
