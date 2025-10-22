<template>
  <div class="flex w-full flex-col items-center justify-start gap-4">
    <UPageCard
      variant="outline"
      class="w-full"
    >
      <slot name="component" />
    </UPageCard>
    <UPageCard
      variant="soft"
      class="w-full"
      title="Playground"
      description="Play with following props and customize the component."
      :ui="{
        title: 'text-2xl',
        description: 'italic mb-4',
      }"
    >
      <slot name="config" />
    </UPageCard>
  </div>
</template>
