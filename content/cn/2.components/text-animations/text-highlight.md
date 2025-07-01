---
title: Text Highlight
description: A text effect that fill background of a text to highlight it.
---

::ComponentLoader{label="Preview" componentName="TextHighlightDemo" type="examples" id="text-highlight"}
::

## 使用 CLI 安装

::InstallationCli{componentId="text-highlight"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="TextHighlight.vue" language="vue" componentName="TextHighlight" type="ui" id="text-highlight"}
::

## Examples

With 3s delay

::ComponentLoader{label="Preview" componentName="TextHighlightDemoDelayed" type="examples" id="text-highlight"}
::

Rounded text background

::ComponentLoader{label="Preview" componentName="TextHighlightDemoRounded" type="examples" id="text-highlight"}
::

Color from CSS variables: use the paintbrush icon in the top right corner to change the color.

::ComponentLoader{label="Preview" componentName="TextHighlightDemoColorsFromCssVariable" type="examples" id="text-highlight"}
::

With text color change.

::ComponentLoader{label="Preview" componentName="TextHighlightDemoTextColorChange" type="examples" id="text-highlight"}
::

## API

| Prop Name        | 类型     | 默认值    | 说明                                                                       |
| ---------------- | -------- | --------- | -------------------------------------------------------------------------- |
| `delay`          | `number` | `0`       | Delay before the animation starts, in `ms`.                                |
| `duration`       | `number` | `2000`    | Duration of the animation, in `ms`.                                        |
| `text-end-color` | `string` | `inherit` | Color of the text at the end of the animation. Match WCAG recommendations. |

## 致谢

- Inspired by [Aceternity UI](https://ui.aceternity.com/components/hero-highlight)
- Credits to [Nathan De Pachtere](https://nathandepachtere.com) for porting this component.
