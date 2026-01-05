---
title: Fond à motifs
description: Un fond animé simple pour faire ressortir vos sections.
category: Background
tags: [css, tailwind, background, magic-ui]
badge: "Updated"
---

::ComponentViewer{demoFile="PatternBackgroundDemo.vue" config="PatternBackgroundConfig" componentId="pattern-background" :componentFiles='["PatternBackground.vue", "index.ts"]' dependencies="class-variance-authority"}

#api

## API

| Nom de propriété | Type                                                                                                   | Valeur par défaut | Description                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `animate`        | `boolean`                                                                                              | `false`           | Passez à `true` si vous souhaitez animer le fond.                                                                                                                        |
| `direction`      | `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top`             | Direction du mouvement d'animation. Vous pouvez utiliser la constante `PATTERN_BACKGROUND_DIRECTION`.                                                                    |
| `direction`      | `grid` \| `dot`                                                                                        | `grid`            | Type de motif. Vous pouvez utiliser la constante `PATTERN_BACKGROUND_VARIANT`.                                                                                           |
| `size`           | `xs` \| `sm` \| `md` \| `lg`                                                                           | `md`              | Taille du motif de fond.                                                                                                                                                 |
| `mask`           | `ellipse` \| `ellipse-top`                                                                             | `ellipse`         | Ajoute un masque sur le motif de fond. Vous pouvez utiliser la constante `PATTERN_BACKGROUND_MASK`.                                                                      |
| `speed`          | `number`                                                                                               | `10000`           | Durée de l'animation en `ms`. Plus la valeur est grande, plus l'animation est lente (`20000` est plus lent que `5000`). Vous pouvez utiliser `PATTERN_BACKGROUND_SPEED`. |

#credits

- Inspiré du composant [Dot Pattern de Magic UI](https://magicui.design/docs/components/dot-pattern).
- Inspiré du composant [Grid Pattern de Magic UI](https://magicui.design/docs/components/grid-pattern).
- Inspiré du composant [Animated Grid Pattern de Magic UI](https://magicui.design/docs/components/animated-grid-pattern).
- Merci à [Nathan De Pachtere](https://nathandepachtere.com/) pour le portage de ce composant.

::
