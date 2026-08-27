---
title: HTML in Canvas
description: Appliquez un fragment shader de style ShaderToy à du HTML en direct grâce à l'API expérimentale HTML-in-Canvas.
category: HTML in Canvas
tags: [webgl, shader, canvas, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlInCanvasDemo.vue" config="HtmlInCanvasConfig" componentId="html-in-canvas" :componentFiles='["HtmlInCanvas.vue", "HtmlInCanvasRenderer.ts", "captureElement.ts", "presets.ts", "index.ts"]'}

HTML in Canvas est une API expérimentale. Lorsqu'elle n'est pas disponible, le composant capture un instantané stylé du DOM et le traite avec le même shader WebGL. Le DOM original reste disponible pour les interactions et l'accessibilité.

Le fragment shader doit définir `mainImage(out vec4 fragColor, in vec2 fragCoord)`. Le HTML capturé est accessible via `iChannel0`.

`htmlInCanvasShaders` fournit les préréglages autonomes `liquid`, `cloth` et `blaze`. Ils peuvent être transmis directement à `shaderCode` ou servir de référence pour créer un déplacement personnalisé.

#api

## API

| Prop           | Type             | Défaut  | Description                                                 |
| -------------- | ---------------- | ------- | ----------------------------------------------------------- |
| `shaderCode`   | `string`         | —       | Code du fragment shader contenant une fonction `mainImage`. |
| `uniforms`     | `ShaderUniforms` | `{}`    | Uniforms numériques, booléens, vectoriels ou matriciels.    |
| `frameRate`    | `number`         | `60`    | Fréquence de rendu maximale.                                |
| `pixelRatio`   | `number`         | `1`     | Échelle de rendu, limitée entre `0.25` et `2`.              |
| `speed`        | `number`         | `1`     | Multiplicateur appliqué à `iTime`.                          |
| `mouseDamping` | `number`         | `0.85`  | Lissage appliqué au déplacement du pointeur.                |
| `paused`       | `boolean`        | `false` | Met la boucle de rendu en pause.                            |
| `autoPause`    | `boolean`        | `true`  | Met en pause hors écran ou lorsque le document est masqué.  |
| `interactive`  | `boolean`        | `true`  | Suit le pointeur pour alimenter `iMouse`.                   |
| `class`        | `string`         | —       | Classes supplémentaires fusionnées sur l'élément racine.    |

### Entrées du shader

`iResolution`, `iTime`, `iTimeDelta`, `iFrameRate`, `iFrame`, `iMouse`, `iDate`, `iHasContent`, `iChannel0` et `iChannelResolution` suivent les conventions ShaderToy. `iPointerVelocity`, `iPointerEnergy` et `iPointerAge` fournissent une impulsion amortie pour les effets qui doivent se stabiliser après le mouvement. `iHasContent` vaut `1` lorsque la texture HTML est disponible.

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
- Préréglage Cloth basé sur le champ vectoriel de [MartinRGB](https://www.shadertoy.com/view/DttSRB).
- Le préréglage Blaze utilise l'implémentation Simplex Noise sous licence MIT d'[Ashima Arts](https://github.com/ashima/webgl-noise).

::
