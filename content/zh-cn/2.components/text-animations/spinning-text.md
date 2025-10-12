---
title: Spinning Text
description: The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.
---

::ComponentLoader{label="预览" componentName="SpinningTextDemo" type="examples" id="spinning-text"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 示例

reverse

::ComponentLoader{label="预览" componentName="SpinningTextDemoReverse" type="examples" id="spinning-text"}
::

## API

| Prop 名称    | 类型                                                    | 默认值  | 描述                                                    |
| ------------ | ------------------------------------------------------- | ------- | ------------------------------------------------------- |
| `duration`   | `number`                                                | `10`    | The duration of the full circular rotation animation.   |
| `reverse`    | `boolean`                                               | `false` | Determines if the animation should rotate in reverse.   |
| `radius`     | `number`                                                | `5`     | The radius of the circular path for the text animation. |
| `transition` | `motion-v Transition`                                   | ``      | Custom transition effects for the animation.            |
| `variants`   | `{container: motion-v Variant, item: motion-v Variant}` | ``      | Variants for container and item animations.             |
| `class`      | `string`                                                | `""`    | A custom class name for the text container.             |

## 通过 CLI 安装

::InstallationCli{componentId="spinning-text"}
::

## Component Code

You can 复制并粘贴以下代码： to create this component:

::CodeViewer{filename="SpinningText.vue" language="vue" componentName="SpinningText" type="ui" id="spinning-text"}
::

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Magic UI Spinning Text](https://magicui.design/docs/components/spinning-text).
