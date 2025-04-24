---
title: Smooth Cursor
description: A customizable, physics-based smooth cursor animation component for Vue applications.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="SmoothCursorDemo" type="examples" id="smooth-cursor"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Install using CLI

::InstallationCli{componentId="smooth-cursor"}
::

## Install Manually

Copy and paste the following code

::code-group

::CodeViewer{filename="SmoothCursor.vue" language="vue" componentName="SmoothCursor" type="ui" id="smooth-cursor"}  
::

::CodeViewer{filename="DefaultCursor.vue" language="vue" componentName="DefaultCursor" type="ui" id="smooth-cursor"}  
::

::

## API

| Prop Name      | Type           | Default         | Description                                             |
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

## Features

- 🎯 Smooth physics-based cursor animations
- 🔄 Rotation effects based on movement direction
- ⚡ Performance optimized with RAF
- 🎨 Fully customizable cursor design
- 📦 Lightweight and easy to implement

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Magic UI Smooth Cursor](https://magicui.design/docs/components/smooth-cursor).
