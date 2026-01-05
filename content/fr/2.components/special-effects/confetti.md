---
title: Confettis
description: Un composant Vue pour des animations de confettis.
category: Special Effects
tags: [css, tailwind, canvas, magic-ui]
---

::ComponentViewer{demoFile="ConfettiDemo.vue" config="ConfettiConfig" componentId="confetti" :componentFiles='["Confetti.vue", "ConfettiButton.vue"]' dependencies="canvas-confetti" devDependencies="@types/canvas-confetti"}

#api

## API

### Props

#### `Confetti`

| Nom de propriété | Type                    | Valeur par défaut | Description                                                          |
| ---------------- | ----------------------- | ----------------- | -------------------------------------------------------------------- |
| `options`        | `ConfettiOptions`       | `{}`              | Options pour chaque salve de confettis.                              |
| `globalOptions`  | `ConfettiGlobalOptions` | `{}`              | Options globales pour l'instance de confettis (ex. comportement au redimensionnement). |
| `manualstart`    | `boolean`               | `false`           | Si `true`, les confettis ne démarrent pas automatiquement au montage. |

#### `ConfettiOptions`

| Propriété                 | Type                        | Valeur par défaut                                                                 | Description                                                            |
| ------------------------- | --------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `particleCount`           | `number`                    | `50`                                                                              | Nombre de particules de confettis à lancer.                            |
| `angle`                   | `number`                    | `90`                                                                              | Angle de lancement des confettis, en degrés.                           |
| `spread`                  | `number`                    | `45`                                                                              | Dispersion des confettis, en degrés.                                   |
| `startVelocity`           | `number`                    | `45`                                                                              | Vélocité initiale des particules de confettis.                         |
| `decay`                   | `number`                    | `0.9`                                                                             | Taux auquel les particules ralentissent.                               |
| `gravity`                 | `number`                    | `1`                                                                               | Gravité appliquée aux particules.                                      |
| `drift`                   | `number`                    | `0`                                                                               | Dérive horizontale appliquée aux particules.                           |
| `ticks`                   | `number`                    | `200`                                                                             | Nombre d'images d'animation pendant lesquelles les confettis restent.  |
| `origin`                  | `{ x: number, y: number }`  | `{ x: 0.5, y: 0.5 }`                                                              | Point d'origine (0 à 1) de l'émission des confettis.                   |
| `colors`                  | `string[]`                  | `['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']` | Tableau de couleurs hexadécimales pour les particules.                 |
| `shapes`                  | `string[]`                  | `['square', 'circle']`                                                            | Tableau des formes de particules.                                      |
| `scalar`                  | `number`                    | `1`                                                                               | Facteur d'échelle pour la taille des particules.                       |
| `zIndex`                  | `number`                    | `100`                                                                             | Valeur de z-index pour le canvas des confettis.                        |
| `disableForReducedMotion` | `boolean`                   | `false`                                                                           | Désactive les confettis pour les utilisateurs préférant réduire les animations. |
| `useWorker`               | `boolean`                   | `true`                                                                            | Utilise un Web Worker pour de meilleures performances.                 |
| `resize`                  | `boolean`                   | `true`                                                                            | Redimensionner automatiquement le canvas lors du redimensionnement de la fenêtre. |
| `canvas`                  | `HTMLCanvasElement \| null` | `null`                                                                            | Canvas personnalisé sur lequel dessiner les confettis.                 |
| `gravity`                 | `number`                    | `1`                                                                               | Gravité appliquée aux particules de confettis.                         |
| `drift`                   | `number`                    | `0`                                                                               | Dérive horizontale appliquée aux particules.                           |
| `flat`                    | `boolean`                   | `false`                                                                           | Si `true`, les particules sont plates (sans rotation ni effet 3D).     |

#### `ConfettiButton`

| Nom de propriété | Type                                               | Valeur par défaut | Description                                           |
| ---------------- | -------------------------------------------------- | ----------------- | ----------------------------------------------------- |
| `options`        | `ConfettiOptions & { canvas?: HTMLCanvasElement }` | `{}`              | Options des confettis déclenchés au clic sur le bouton. |

#credits

- Construit avec la bibliothèque [canvas-confetti](https://www.npmjs.com/package/canvas-confetti).
- Porté depuis [Magic UI Confetti](https://magicui.design/docs/components/confetti).

::
