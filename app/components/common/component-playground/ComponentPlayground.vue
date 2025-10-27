<template>
  <div class="flex w-full flex-col items-start justify-start gap-4">
    <UPageCard
      variant="outline"
      class="bg-default/15 w-full"
    >
      <slot name="component" />
    </UPageCard>
    <UPageCard
      variant="naked"
      class="w-full py-4"
      title="Playground"
      description="Play with following props and customize the component."
      :ui="{
        title: 'text-2xl',
        description: 'italic mb-4',
      }"
    >
      <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <slot name="config" />
      </div>
    </UPageCard>
  </div>
</template>
