<template>
  <ScriptCopy
    :command-map="{
      npm: 'npm run shadcn add button',
      yarn: 'yarn shadcn add button',
      pnpm: 'pnpm dlx shadcn@latest add button',
      bun: 'bun x shadcn@latest add button',
    }"
  />
</template>
