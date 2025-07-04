---
title: Balance Slider
description: A dynamic balance slider with adjustable colors, limits, and interactive tooltip.
---

::ComponentLoader{label="预览" componentName="BalanceSliderDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="balance-slider"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="BalanceSlider.vue" language="vue" componentName="BalanceSlider" type="ui" id="balance-slider"}
::

## API

| Prop 名称        | 类型     | 默认值      | 描述                                                |
| ---------------- | -------- | ----------- | --------------------------------------------------- |
| `initialValue`   | `number` | `50`        | Initial position of the slider (0-100).             |
| `leftColor`      | `string` | `"#e68a00"` | Background color for the left side of the slider.   |
| `rightColor`     | `string` | `"#ffffff"` | Background color for the right side of the slider.  |
| `minShiftLimit`  | `number` | `40`        | Minimum limit where shifting animation activates.   |
| `maxShiftLimit`  | `number` | `68`        | Maximum limit where shifting animation deactivates. |
| `leftContent`    | `string` | `"LEFT"`    | Text displayed in the tooltip for the left side.    |
| `rightContent`   | `string` | `"RIGHT"`   | Text displayed in the tooltip for the right side.   |
| `indicatorColor` | `string` | `"#FFFFFF"` | Color of the central indicator on the slider.       |

## 功能特性

- **Dual-Sided Color Control**: Customize the left and right side colors of the slider to create a distinct balance effect.
- **Interactive Tooltip**: Displays real-time percentage values for both sides, with customizable content for left and right labels.
- **Shift Animation**: Activates a shifting effect within defined limits, adding an engaging visual element.
- **Responsive Indicator**: Central indicator adjusts its color based on active state, enhancing interactivity.
- **Accessible Controls**: Works with keyboard and touch interactions for seamless accessibility.

## 感谢

- Inspired and ported from code shared in [Jhey's CSS only version of Balance Slider](https://x.com/jh3yy/status/1748809599598399792?s=46)
- Original concept by [Malay Vasa](https://x.com/MalayVasa/status/1748726374079381930).
