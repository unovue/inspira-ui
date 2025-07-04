---
title: 极光背景
description: 为您的网站提供一个微妙的极光或南极光背景。
---

::ComponentLoader{label="预览" componentName="AuroraBackgroundDemo" type="examples" id="aurora-background"}
::

## API

| Prop 名称        | 类型      | 默认值 | 描述                                                                      |
| ---------------- | --------- | :----: | ------------------------------------------------------------------------- |
| `class`          | `string`  |  `-`   | Additional CSS classes to apply to the component for styling.             |
| `radialGradient` | `boolean` | `true` | Determines whether a radial gradient effect is applied to the background. |

## 安装

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

## 通过 CLI 安装

::InstallationCli{componentId="aurora-background"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="AuroraBackground.vue" language="vue" componentName="AuroraBackground" type="ui" id="aurora-background"}
::

## 功能特性

- **支持插槽**: 使用默认插槽轻松地在组件中添加任何内容。

## 感谢

- Credits to [Aceternity UI](https://ui.aceternity.com/components/aurora-background).
- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for porting this component.
