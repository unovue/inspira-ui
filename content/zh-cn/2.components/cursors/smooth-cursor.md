---
title: Smooth Cursor
description: A customizable, physics-based smooth cursor animation component for Vue applications.
---

::ComponentLoader{label="预览" componentName="SmoothCursorDemo" type="examples" id="smooth-cursor"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 通过 CLI 安装

::InstallationCli{componentId="smooth-cursor"}
::

## 手动安装

复制并粘贴以下代码：

::code-group

::CodeViewer{filename="SmoothCursor.vue" language="vue" componentName="SmoothCursor" type="ui" id="smooth-cursor"}  
::

::CodeViewer{filename="DefaultCursor.vue" language="vue" componentName="DefaultCursor" type="ui" id="smooth-cursor"}  
::

::

## API

| Prop 名称      | 类型           | 默认值          | 描述                                                    |
| -------------- | -------------- | --------------- | ------------------------------------------------------- |
| `cursor`       | `Component`    | `DefaultCursor` | Custom cursor component to replace the default cursor   |
| `springConfig` | `SpringConfig` | `See below`     | Configuration object for the spring animation behavior. |

### SpringConfig Type

```ts
interface springConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}
```

### Default SpringConfig Configuration

```ts
const defaultSpringConfig = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001,
};
```

## Browser Support

Compatible with all modern browsers that support:

- `requestAnimationFrame`
- CSS transforms
- Pointer events

## Accessibility

When using this component, consider that:

- Users navigating via keyboard will not see the custom cursor
- You may want to provide alternative visual cues for interactive elements
- Some users may have motion sensitivity, so consider providing a way to disable the animation

## 功能特性

- 🎯 Smooth physics-based cursor animations
- 🔄 Rotation effects based on movement direction
- ⚡ Performance optimized with RAF
- 🎨 Fully customizable cursor design
- 📦 Lightweight and easy to implement

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Magic UI Smooth Cursor](https://magicui.design/docs/components/smooth-cursor).
