---
title: Warp Background
description: A container component that applies a warp animation effect to its children
---

::ComponentLoader{label="预览" componentName="WarpBackgroundDemo" type="examples" id="warp-background"}
::

## 通过 CLI 安装

::InstallationCli{componentId="warp-background"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="WarpBackground.vue" language="vue" componentName="WarpBackground" type="ui" id="warp-background"}
:CodeViewerTab{filename="Beam.vue" language="vue" componentName="Beam" type="ui" id="warp-background"}

::

## API

| Prop 名称      | 类型     | 默认值                 | 描述                                      |
| -------------- | -------- | ---------------------- | ----------------------------------------- |
| `perspective`  | `number` | `100`                  | The perspective of the warp animation     |
| `beamsPerSide` | `number` | `3`                    | The number of beams per side              |
| `beamSize`     | `number` | `5`                    | The size of the beams                     |
| `beamDelayMax` | `number` | `3`                    | The maximum delay of the beams in seconds |
| `beamDelayMin` | `number` | `0`                    | The minimum delay of the beams in seconds |
| `beamDuration` | `number` | `3`                    | The duration of the beams                 |
| `gridColor`    | `string` | `"hsl(var(--border))"` | The color of the grid lines               |

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Magic UI WarpBackground](https://magicui.design/docs/components/warp-background).
