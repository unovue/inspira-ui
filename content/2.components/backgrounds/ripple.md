---
title: Ripple
description: An animated ripple effect typically used behind elements to emphasize them.
---

::ComponentLoader{label="Preview" componentName="RippleDemo" type="examples" id="ripple"}
::

## Install using CLI

::InstallationCli{componentId="ripple"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Ripple.vue" language="vue" componentName="Ripple" type="ui" id="ripple"}
:CodeViewerTab{filename="RippleCircle.vue" language="vue" componentName="RippleCircle" type="ui" id="ripple"}
:CodeViewerTab{filename="RippleContainer.vue" language="vue" componentName="RippleContainer" type="ui" id="ripple"}
::

## Examples

Only lines

::ComponentLoader{label="Preview" componentName="RippleDemoLinesOnly" type="examples" id="ripple"}
::

Squared

::ComponentLoader{label="Preview" componentName="RippleDemoSquared" type="examples" id="ripple"}
::

Blobed

::ComponentLoader{label="Preview" componentName="RippleDemoBlobed" type="examples" id="ripple"}
::

## API

| Prop Name                     | Type     | Default     | Description                                                            |
| ----------------------------- | -------- | ----------- | ---------------------------------------------------------------------- |
| `baseCircleSize`              | `number` | `210`       | The size of the main circle in pixels.                                 |
| `baseCircleOpacity`           | `number` | `0.24`      | The opacity of the main circle.                                        |
| `spaceBetweenCircle`          | `number` | `70`        | The space between each ripple circle in pixels.                        |
| `circleOpacityDowngradeRatio` | `number` | `0.03`      | The rate at which opacity decreases for each successive ripple circle. |
| `circleClass`                 | `string` | `undefined` | CSS class name(s) for additional styling of circles.                   |
| `waveSpeed`                   | `number` | `80`        | The animation speed for the wave effect, measured in ms.               |
| `numberOfCircles`             | `number` | `7`         | The number of ripple circles to render.                                |

## Credits

- Credits to [Magic UI](https://magicui.design/docs/components/ripple).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for updating this component.
