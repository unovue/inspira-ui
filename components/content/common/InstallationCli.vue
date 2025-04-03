<template>
  <MDC
    class="mt-6"
    :value="commands"
  />
</template>

<script setup lang="ts">
interface Props {
  componentId: string;
}

const { componentId } = defineProps<Props>();

const url = `https://inspira-ui.com/r/${componentId}.json`;

const commands = `
::code-group
\`\`\`bash [npm]
npx shadcn-vue@latest add "${url}"
\`\`\`

\`\`\`bash [pnpm]
pnpm dlx shadcn-vue@latest add "${url}"
\`\`\`

\`\`\`bash [bun]
bunx shadcn-vue@latest add "${url}"
\`\`\`

\`\`\`bash [yarn]
yarn dlx shadcn-vue@latest add "${url}"
\`\`\`
::
`;
</script>

<style scoped></style>
