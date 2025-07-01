---
title: 极光背景
description: A subtle Aurora or Southern Lights background for your website.
---

::ComponentLoader{label="Preview" componentName="AuroraBackgroundDemo" type="examples" id="aurora-background"}
::

## API

| Prop Name        | 类型      | 默认值 | 说明                                                                      |
| ---------------- | --------- | ------ | ------------------------------------------------------------------------- |
| `class`          | `string`  | `-`    | Additional CSS classes to apply to the component for styling.             |
| `radialGradient` | `boolean` | `true` | Determines whether a radial gradient effect is applied to the background. |

## Installation

::alert
Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-aurora: aurora 60s linear infinite;
  @keyframes aurora {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}
```

::

## 使用 CLI 安装

::InstallationCli{componentId="aurora-background"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="AuroraBackground.vue" language="vue" componentName="AuroraBackground" type="ui" id="aurora-background"}
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## 致谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/aurora-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
