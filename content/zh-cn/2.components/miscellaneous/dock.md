---
title: Dock
description: A macOS-style dock with magnifying icons as you hover over them.
---

::ComponentLoader{label="预览" componentName="DockDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="dock"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{filename="Dock.vue" language="vue" componentName="Dock" type="ui" id="dock"}
:CodeViewerTab{filename="DockIcon.vue" language="vue" componentName="DockIcon" type="ui" id="dock"}
:CodeViewerTab{filename="DockSeparator.vue" language="vue" componentName="DockSeparator" type="ui" id="dock"}
:CodeViewerTab{filename="index.ts" language="ts" componentName="index" extension="ts" type="ui" id="dock"}
:CodeViewerTab{filename="types.ts" language="ts" componentName="types" extension="ts" type="ui" id="dock"}  
:CodeViewerTab{filename="injectionKeys.ts" language="ts" componentName="injectionKeys" extension="ts" type="ui" id="dock"}

::

## API

::steps

### `Dock`

| Prop 名称       | 类型     | 描述                                                                  |
| --------------- | -------- | --------------------------------------------------------------------- |
| `class`         | `string` | Additional classes to apply to the dock container.                    |
| `magnification` | `number` | Magnification factor for the dock icons on hover (default: 60).       |
| `distance`      | `number` | Distance from the icon center where magnification applies.            |
| `direction`     | `string` | Alignment of icons (`top`, `middle`, `bottom`) (default: middle).     |
| `orientation`   | `string` | Orientation of Dock (`vertical`, `horizontal`) (default: horizontal). |

| Slot Name | 描述                                                 |
| --------- | ---------------------------------------------------- |
| `default` | Dock Dock or other child components to be displayed. |

### `DockIcon`

| Slot Name | 描述                                                    |
| --------- | ------------------------------------------------------- |
| `default` | Component or icon to be displayed inside the dock icon. |

::

## 感谢

- Credits to macOS Dock for the design inspiration and the fantastic hover magnification effect.
