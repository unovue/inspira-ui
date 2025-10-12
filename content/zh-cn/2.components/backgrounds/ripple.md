---
title: 涟漪
description: 一种动画涟漪效应，通常用于元素后面以强调它们。
---

::ComponentLoader{label="预览" componentName="RippleDemo" type="examples" id="ripple"}
::

## 通过 CLI 安装

::InstallationCli{componentId="ripple"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="Ripple.vue" language="vue" componentName="Ripple" type="ui" id="ripple"}
:CodeViewerTab{filename="RippleCircle.vue" language="vue" componentName="RippleCircle" type="ui" id="ripple"}
:CodeViewerTab{filename="RippleContainer.vue" language="vue" componentName="RippleContainer" type="ui" id="ripple"}
::

## 示例

Only lines

::ComponentLoader{label="预览" componentName="RippleDemoLinesOnly" type="examples" id="ripple"}
::

Squared

::ComponentLoader{label="预览" componentName="RippleDemoSquared" type="examples" id="ripple"}
::

Blobed

::ComponentLoader{label="预览" componentName="RippleDemoBlobed" type="examples" id="ripple"}
::

## API

| Prop 名称                     | 类型     | 默认值      | 描述                                                                   |
| ----------------------------- | -------- | ----------- | ---------------------------------------------------------------------- |
| `baseCircleSize`              | `number` | `210`       | The size of the main circle in pixels.                                 |
| `baseCircleOpacity`           | `number` | `0.24`      | The opacity of the main circle.                                        |
| `spaceBetweenCircle`          | `number` | `70`        | The space between each ripple circle in pixels.                        |
| `circleOpacityDowngradeRatio` | `number` | `0.03`      | The rate at which opacity decreases for each successive ripple circle. |
| `circleClass`                 | `string` | `undefined` | CSS class name(s) for additional styling of circles.                   |
| `waveSpeed`                   | `number` | `80`        | The animation speed for the wave effect, measured in ms.               |
| `numberOfCircles`             | `number` | `7`         | The number of ripple circles to render.                                |

## 感谢

- Credits to [Magic UI](https://magicui.design/docs/components/ripple).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for updating this component.
