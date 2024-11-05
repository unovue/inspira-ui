---
title: Link Preview
description: Dynamic link previews for your anchor tags
---

::ComponentLoader{label="Preview" componentName="LinkPreviewDemo" type="examples"}  
::

::alert{type="info"}
**Note:** This component requires `qss` npm package as a dependency.

Please install qss using following commands.

    ::code-group

    ```bash [npm]
    npm install qss
    ```

    ```bash [pnpm]
    pnpm install qss
    ```

    ```bash [bun]
    bun add qss
    ```

    ```bash [yarn]
    yarn add qss
    ```
    ::

::

## API

| Prop Name   | Type      | Default | Description                                                                                 |
| ----------- | --------- | ------- | ------------------------------------------------------------------------------------------- |
| `class`     | `string`  | `""`    | Custom class applied to the main element.                                                   |
| `linkClass` | `string`  | `""`    | Custom class applied to the link element.                                                   |
| `width`     | `number`  | `200`   | Width of the preview image.                                                                 |
| `height`    | `number`  | `125`   | Height of the preview image.                                                                |
| `isStatic`  | `boolean` | `false` | Determines if the preview image is static or a URL preview (set to `true` for static mode). |
| `imageSrc`  | `string`  | `""`    | The source of the image to display (required if `isStatic` is `true`).                      |
| `url`       | `string`  | `""`    | URL for the link and for generating the preview image (required if `isStatic` is `false`).  |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="LinkPreview.vue" language="vue" componentName="LinkPreview" type="ui" id="link-preview"}
::

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Link Preview](https://ui.aceternity.com/components/link-preview).
