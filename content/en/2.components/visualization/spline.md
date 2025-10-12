---
title: Spline
description: A Vue wrapper component for the Spline 3D tool, providing events and auto-resizing.
---

::ComponentLoader{label="Preview" componentName="SplineDemo" type="examples" id="spline"}
::

## API

| Prop Name        | Type       | Default     | Description                                                   |
| ---------------- | ---------- | ----------- | ------------------------------------------------------------- |
| `scene`          | `string`   | —           | The URL or path to the Spline scene file. **Required**.       |
| `onLoad`         | `Function` | `undefined` | Callback that fires when the Spline scene loads successfully. |
| `renderOnDemand` | `boolean`  | `true`      | Enables or disables Spline's render-on-demand optimization.   |
| `style`          | `object`   | `{}`        | Custom CSS style applied to the container of the canvas.      |

**Emits**

| Event Name           | Payload | Description                                                   |
| -------------------- | ------- | ------------------------------------------------------------- |
| `error`              | `Error` | Emits if there's an error while loading the Spline scene.     |
| `spline-mouse-down`  | `any`   | Emits when a mouseDown event is detected in the Spline scene. |
| `spline-mouse-up`    | `any`   | Emits when a mouseUp event is detected in the Spline scene.   |
| `spline-mouse-hover` | `any`   | Emits when the mouseHover event is triggered.                 |
| `spline-key-down`    | `any`   | Emits on keyDown within the Spline scene.                     |
| `spline-key-up`      | `any`   | Emits on keyUp within the Spline scene.                       |
| `spline-start`       | `any`   | Emits when the Spline scene starts.                           |
| `spline-look-at`     | `any`   | Emits when a lookAt event occurs.                             |
| `spline-follow`      | `any`   | Emits when a follow event occurs.                             |
| `spline-scroll`      | `any`   | Emits on scroll interactions.                                 |

::alert{type="info"}
**Note:** This component uses Spline & requires `@splinetool/runtime` npm package as a dependency.
::

## Install using CLI

::InstallationCli{componentId="spline"}
::

## Install Manually

### Install the dependencies

::code-group

```bash [npm]
npm install @splinetool/runtime
```

```bash [pnpm]
pnpm install @splinetool/runtime
```

```bash [bun]
bun add @splinetool/runtime
```

```bash [yarn]
yarn add @splinetool/runtime
```

::

### Component Code

You can copy and paste the following code to create this component:

::code-group

::CodeViewerTab{label="Spline.vue" language="vue" componentName="Spline" type="ui" id="spline"}
::

::CodeViewerTab{label="ParentSize.vue" language="vue" componentName="ParentSize" type="ui" id="spline"}
::

::

## Features

- **Responsive Canvas**: Uses a `ParentSize` wrapper to adjust to the parent container size.
- **Event Bindings**: Exposes Spline’s mouse, keyboard, and scrolling events via Vue emits.
- **Render-On-Demand**: Optionally only re-renders when necessary, optimizing performance.
- **Easy Integration**: Load a Spline 3D scene by simply passing the `scene` prop.
- **Cleanup & Disposal**: Manages resource disposal on unmount to avoid memory leaks.

## Credits

- Utilizes Spline’s runtime behind the scenes.
- Inspired by various 3D web experiences using Spline.
