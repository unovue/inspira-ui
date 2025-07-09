---
title: 彩光边框
description: An animated border effect.
---

::ComponentLoader{label="预览" componentName="GlowBorderDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Installation

::alert
Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-glow: glow var(--duration) infinite linear;
  @keyframes glow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

::

## 通过 CLI 安装

::InstallationCli{componentId="glow-border"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="GlowBorder.vue" language="vue" componentName="GlowBorder" type="ui" id="glow-border"}
::

## API

| Prop 名称      | 类型                 | 默认值 | 描述                                                       |
| -------------- | -------------------- | ------ | ---------------------------------------------------------- |
| `duration`     | `number`             | `10`   | Duration of the glowing border animation.                  |
| `color`        | `string \| string[]` | `#FFF` | Color or array of colors to applied on the glowing border. |
| `borderRadius` | `number`             | `10`   | Radius of the border.                                      |
| `borderWidth`  | `number`             | `2`    | Width of the border.                                       |

## 感谢

- Credits to [Magic UI](https://magicui.design/docs/components/shine-border) for this fantastic component.
