---
title: Globe
description: An interactive rotating globe component.
---

::ComponentLoader{label="Preview" componentName="GlobeDemo" type="examples" id="globe"}
::

::alert
**Note:** This component requires `cobe` and `vue-use-spring` as a dependency. Please install these using following commands.

    ::code-group

    ```bash [npm]
    npm install cobe vue-use-spring
    ```

    ```bash [pnpm]
    pnpm install cobe vue-use-spring
    ```

    ```bash [bun]
    bun add cobe vue-use-spring
    ```

    ```bash [yarn]
    yarn add cobe vue-use-spring
    ```
    ::

::

## API

| Prop Name   | Type          | Default | Description                                                                                                 |
| ----------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `class`     | `string`      | `""`    | Additional CSS classes for custom styling.                                                                  |
| `config`    | `COBEOptions` | N/A     | Configuration object for the globe, following **[COBE]**(https://cobe.vercel.app/docs/api) library options. |
| `mass`      | `number`      | `1`     | Mass parameter for the spring animation controlling rotation inertia.                                       |
| `tension`   | `number`      | `280`   | Tension parameter for the spring animation, affecting responsiveness.                                       |
| `friction`  | `number`      | `100`   | Friction parameter for the spring animation, affecting damping.                                             |
| `precision` | `number`      | `0.001` | Precision parameter for the spring animation calculations.                                                  |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="Globe.vue" language="vue" componentName="Globe" type="ui" id="globe"}
::

## Features

- **Interactive 3D Globe**: Provides an interactive 3D globe visualization that users can rotate with mouse or touch interactions.

- **Customizable Markers**: Display markers on the globe at specified locations with customizable sizes.

- **Smooth Animations**: Utilizes physics-based spring animations for smooth and responsive globe rotations.

- **Configurable Appearance**: Customize the globe's appearance and behavior through the `config` prop using COBE library options.

- **Responsive Design**: Automatically adjusts to different screen sizes and resolutions.

## Credits

- Built using the [cobe](https://github.com/shuding/cobe) library for WebGL globe visualization.

- Ported from [Magic UI](https://magicui.design/docs/components/globe).
