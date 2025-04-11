---
title: Dock
description: A macOS-style dock with magnifying icons as you hover over them.
---

::ComponentLoader{label="Preview" componentName="DockDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="dock"}
::

## Install Manually

Copy and paste the following code in the same folder

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

| Prop Name       | Type     | Description                                                           |
| --------------- | -------- | --------------------------------------------------------------------- |
| `class`         | `string` | Additional classes to apply to the dock container.                    |
| `magnification` | `number` | Magnification factor for the dock icons on hover (default: 60).       |
| `distance`      | `number` | Distance from the icon center where magnification applies.            |
| `direction`     | `string` | Alignment of icons (`top`, `middle`, `bottom`) (default: middle).     |
| `orientation`   | `string` | Orientation of Dock (`vertical`, `horizontal`) (default: horizontal). |

| Slot Name | Description                                          |
| --------- | ---------------------------------------------------- |
| `default` | Dock Dock or other child components to be displayed. |

### `DockIcon`

| Slot Name | Description                                             |
| --------- | ------------------------------------------------------- |
| `default` | Component or icon to be displayed inside the dock icon. |

::

## Credits

- Credits to macOS Dock for the design inspiration and the fantastic hover magnification effect.
