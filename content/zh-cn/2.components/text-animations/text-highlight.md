---
title: 文本高亮
description: 填充文本背景以突显文本的效果。
---

::ComponentLoader{label="预览" componentName="TextHighlightDemo" type="examples" id="text-highlight"}
::

## 通过 CLI 安装

::InstallationCli{componentId="text-highlight"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="TextHighlight.vue" language="vue" componentName="TextHighlight" type="ui" id="text-highlight"}
::

## 示例

With 3s delay

::ComponentLoader{label="预览" componentName="TextHighlightDemoDelayed" type="examples" id="text-highlight"}
::

Rounded text background

::ComponentLoader{label="预览" componentName="TextHighlightDemoRounded" type="examples" id="text-highlight"}
::

Color from CSS variables: use the paintbrush icon in the top right corner to change the color.

::ComponentLoader{label="预览" componentName="TextHighlightDemoColorsFromCssVariable" type="examples" id="text-highlight"}
::

With text color change.

::ComponentLoader{label="预览" componentName="TextHighlightDemoTextColorChange" type="examples" id="text-highlight"}
::

## API

| Prop 名称        | 类型     | 默认值    | 描述                                                                       |
| ---------------- | -------- | --------- | -------------------------------------------------------------------------- |
| `delay`          | `number` | `0`       | Delay before the animation starts, in `ms`.                                |
| `duration`       | `number` | `2000`    | Duration of the animation, in `ms`.                                        |
| `text-end-color` | `string` | `inherit` | Color of the text at the end of the animation. Match WCAG recommendations. |

## 感谢

- Inspired by [Aceternity UI](https://ui.aceternity.com/components/hero-highlight)
- Credits to [Nathan De Pachtere](https://nathandepachtere.com) for porting this component.
