---
title: Particle Image
description: Visually appealing particle animation applied to images as seen on NuxtLabs.com
---

::ComponentLoader{label="Preview" componentName="ParticleImageDemo" type="examples"}
::

## 使用 CLI 安装

::InstallationCli{componentId="particle-image"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="ParticleImage.vue" language="vue" componentName="ParticleImage" type="ui" id="particle-image"}
:CodeViewerTab{label="inspiraImageParticles.js" icon="vscode-icons:file-type-js" componentName="inspiraImageParticles" type="ui" id="particle-image" extension="js"}
:CodeViewerTab{label="inspiraImageParticles.d.ts" icon="vscode-icons:file-type-typescriptdef" componentName="inspiraImageParticles" type="ui" id="particle-image" extension="d.ts"}

::

## API

| Prop Name         | 类型                                                                          | 默认值   | 说明                                                                            |
| ----------------- | ----------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `imageSrc`        | `string`                                                                      | `null`   | Source URL for the image to which the particle effect is applied.               |
| `class`           | `string`                                                                      | `null`   | Additional CSS classes to apply to the image element.                           |
| `canvasWidth`     | `string`                                                                      | `null`   | Width of the particle effect canvas.                                            |
| `canvasHeight`    | `string`                                                                      | `null`   | Height of the particle effect canvas.                                           |
| `gravity`         | `string`                                                                      | `null`   | Gravity force affecting the particle movement.                                  |
| `particleSize`    | `string`                                                                      | `null`   | Size of the particles.                                                          |
| `particleGap`     | `string`                                                                      | `null`   | Gap between particles.                                                          |
| `mouseForce`      | `string`                                                                      | `null`   | Force applied to particles based on mouse movement.                             |
| `renderer`        | `"default" \| "webgl"`                                                        | `null`   | The renderer to use for particle generation, either default or WebGL.           |
| `color`           | `string`                                                                      | `#FFF`   | Hexadecimal color code used for particles. Supports 3 or 6 character hex codes. |
| `colorArr`        | `number[]`                                                                    | `null`   | Array of numbers to define multiple particle colors.                            |
| `initPosition`    | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "misplaced" \| "none"` | `random` | Initial position of the particles when the animation starts.                    |
| `initDirection`   | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `random` | Initial direction of the particles when the animation starts.                   |
| `fadePosition`    | `"explode" \| "top" \| "left" \| "bottom" \| "right" \| "random" \| "none"`   | `none`   | Position where the particles fade out.                                          |
| `fadeDirection`   | `"random" \| "top" \| "left" \| "bottom" \| "right" \| "none"`                | `none`   | Direction in which the particles fade out.                                      |
| `noise`           | `number`                                                                      | `null`   | Noise of the particles.                                                         |
| `responsiveWidth` | `boolean`                                                                     | `false`  | Should the canvas be responsive.                                                |

## 致谢

- Credits to [Nuxt Labs](https://nuxtlabs.com) for this inspiration.
- Credits to [NextParticles](https://nextparticle.nextco.de) for the base of the animation library.
