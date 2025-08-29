---
title: 宇宙环球
description: A breathtaking, animated 3D portal built with Three.js that features glowing rings, floating crystals, space distortion, and interdimensional streams.
---

::ComponentLoader{label="预览" componentName="CosmicPortalDemo" type="examples" id="cosmic-portal"}
::

## API

| Prop 名称          | 类型     | 默认值    | 描述                                                        |
| ------------------ | -------- | --------- | ----------------------------------------------------------- |
| `portalComplexity` | `number` | `4`       | Controls the complexity of the portal effects and geometry. |
| `crystalCount`     | `number` | `12`      | Number of floating crystals in the scene.                   |
| `primaryColor`     | `string` | `#9b59b6` | Main color for portal and background glow.                  |
| `secondaryColor`   | `string` | `#3498db` | Secondary color for blending and glow.                      |
| `accentColor`      | `string` | `#e74c3c` | Color used for portal energy and highlight.                 |
| `vortexColor`      | `string` | `#2ecc71` | Color used for swirling vortex and dimensional streams.     |
| `rotationSpeed`    | `number` | `0.3`     | Speed at which objects rotate.                              |
| `bloomStrength`    | `number` | `1.2`     | Intensity of bloom postprocessing.                          |
| `bloomRadius`      | `number` | `0.7`     | Radius of the bloom effect.                                 |
| `bloomThreshold`   | `number` | `0.2`     | Threshold for bloom visibility.                             |
| `dimensionShift`   | `number` | `4`       | Level of dimension distortion for shader animation.         |

## 功能特性

- **Stunning Visuals**: Animated cosmic background, glowing vortex rings, and interdimensional streams.
- **Shader Driven Effects**: Unique portal burst, distortion, and pulsing animations.
- **User Controls**: Zoom, rotate, and orbit around the scene using OrbitControls.
- **Postprocessing**: Includes bloom and FXAA for cinematic quality.
- **Dynamic Colors**: Easily shift dimensions and regenerate colors using exposed methods.
- **Exposed Actions**: Call `activatePortal()` to trigger portal effects or `shiftDimensions()` to regenerate the visual style.

## 安装

确保在您的项目中安装了以下库：

:pm-install{name="three postprocessing"}
:pm-install{name="@types/three" save-dev}

## 通过 CLI 安装

::InstallationCli{componentId="cosmic-portal"}
::

## 手动安装

复制和粘贴下列代码：

::CodeViewer{filename="CosmicPortal.vue" language="vue" componentName="CosmicPortal" type="ui" id="cosmic-portal"}
::

## 感谢

- 灵感和移植自 [Dimensional Portal by Techartist](https://x.com/techartist_).
