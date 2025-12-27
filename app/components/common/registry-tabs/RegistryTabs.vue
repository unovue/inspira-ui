<script lang="ts" setup>
interface Props {
  componentId: string;
}

const { componentId } = defineProps<Props>();

const command = `shadcn-vue@latest add "https://registry.inspira-ui.com/${componentId}.json"`;

const items = ref([
  {
    label: "pnpm",
    icon: "vscode-icons:file-type-pnpm",
    command: `pnpm dlx ${command}`,
  },
  {
    label: "npm",
    icon: "devicon:npm",
    command: `npx ${command}`,
  },
  {
    label: "yarn",
    icon: "vscode-icons:file-type-yarn",
    command: `yarn dlx ${command}`,
  },
  {
    label: "bun",
    icon: "devicon:bun",
    command: `bunx ${command}`,
  },
]);

const mdc = `
::code-group
${items.value.map((pm) => `\`\`\`bash [${pm.label}]\n${pm.command}\n\`\`\`\n`).join("\n")}
::`;
</script>

<template>
  <MDC :value="mdc" />
</template>
