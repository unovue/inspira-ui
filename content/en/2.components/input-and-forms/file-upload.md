---
title: File Upload
description: A modern file upload component with a 3D card effect, drag-and-drop functionality, and a responsive grid background pattern.
category: Forms & Input
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="FileUploadDemo.vue" config="FileUploadConfig" componentId="file-upload" :componentFiles='["FileUpload.vue", "FileUploadGrid.vue"]'}

#api

## API

### `FileUpload`

The `FileUpload` component serves as a wrapper for the file upload effect. It manages mouse events to create a 3D perspective.

#### Props

| Prop Name | Type   | Default | Description                                           |
| --------- | ------ | ------- | ----------------------------------------------------- |
| `class`   | String | -       | Additional classes for styling the container element. |

#### Emits

| Event Name | Type                      | Description                                                |
| ---------- | ------------------------- | ---------------------------------------------------------- |
| `onChange` | `(files: File[]) => void` | Callback function triggered when files are added/uploaded. |

### `FileUploadGrid`

The `FileUploadGrid` component provides the background grid pattern for the file upload area. It is intended to be used within a `FileUpload` component to create the visual grid effect behind the upload interface.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#credits

- Credits to [kalix127](https://github.com/kalix127) for porting this component.
- Inspired by [AcernityUI](https://ui.aceternity.com/components/file-upload).

::
