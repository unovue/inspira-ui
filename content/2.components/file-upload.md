---
title: File Upload
description: A modern file upload component with a 3D card effect, drag-and-drop functionality, and a responsive grid background pattern.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="FileUploadDemo" type="examples"}
::

## API

::steps

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

#### Usage

```vue [MyComponent.vue]
<FileUpload class="additional-class">
  <!-- Your content here -->
</FileUpload>
```

### `FileUploadGrid`

The `FileUploadGrid` component provides the background grid pattern for the file upload area. It is intended to be used within a `FileUpload` component to create the visual grid effect behind the upload interface.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### Usage

```vue [MyComponent.vue]
<FileUploadGrid class="custom-class" />
```

::

## Component Code

You can copy and paste the following code to create these components:

::code-group

::CodeViewerTab{label="FileUpload.vue" icon="vscode-icons:file-type-vue" componentName="FileUpload" type="ui" id="file-upload"}
::

::CodeViewerTab{label="FileUploadGrid.vue" icon="vscode-icons:file-type-vue" componentName="FileUploadGrid" type="ui" id="file-upload"}
::

::

## Credits

- Credits to [kalix127](https://github.com/kalix127) for porting this component.
- Inspired by [AcernityUI](https://ui.aceternity.com/components/file-upload).
