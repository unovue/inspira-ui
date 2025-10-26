<script lang="ts" setup>
interface Props {
  isDev?: boolean;
  packageName?: string | string[];
}

const { isDev = false, packageName = "" } = defineProps<Props>();

const allPackageName = computed(
  () => `${Array.isArray(packageName) ? packageName.join(" ") : packageName}`,
);

const items = ref([
  {
    label: "pnpm",
    icon: "vscode-icons:file-type-pnpm",
    command: `pnpm add ${isDev ? "-D " : ""}${allPackageName.value}`,
  },
  {
    label: "npm",
    icon: "devicon:npm",
    command: `npm install ${isDev ? "-D " : ""}${allPackageName.value}`,
  },
  {
    label: "yarn",
    icon: "vscode-icons:file-type-yarn",
    command: `yarn add ${isDev ? "-D " : ""}${allPackageName.value}`,
  },
  {
    label: "bun",
    icon: "devicon:bun",
    command: `bun add ${isDev ? "-d " : ""}${allPackageName.value}`,
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
