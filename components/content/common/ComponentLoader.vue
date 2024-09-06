<template>
  <ClientOnly>
    <CodeGroup>
      <div :label="label || componentName" icon="lucide:laptop-minimal">
        <ComponentViewer :component-name="componentName" />
      </div>
      <CodeViewerTab v-bind="$props" label="Code" />
    </CodeGroup>
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps({
  componentName: {
    type: String,
    required: true,
  },
  id: String,
  type: String,
  label: String,
  class: String,
  icon: {
    type: String,
    default: "lucide:square-terminal",
  },
});
</script>
