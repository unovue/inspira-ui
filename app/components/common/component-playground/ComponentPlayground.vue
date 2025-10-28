<script setup lang="ts">
const open = ref(false);

const isDesktop = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <div class="flex w-full flex-col items-start justify-start gap-4">
    <UPageCard
      variant="outline"
      class="bg-default/15 w-full"
    >
      <slot name="component" />
    </UPageCard>

    <div class="flex w-full flex-row items-center justify-between">
      <div class="flex flex-col items-start gap-2">
        <span class="text-2xl font-semibold">Playground</span>
        <span class="text-muted italic">Play with props and customize the component.</span>
      </div>
      <UDrawer
        v-model:open="open"
        :direction="isDesktop ? 'right' : 'bottom'"
        :overlay="!isDesktop"
        :dismissible="!isDesktop"
        :handle="false"
        :modal="!isDesktop"
        :inset="isDesktop"
        :ui="{
          header: 'flex items-center justify-between',
          content: 'bg-default/35 backdrop-blur-3xl min-md:min-w-md',
        }"
      >
        <UButton
          label="Customize"
          variant="solid"
          trailing-icon="tabler:chevron-right"
          size="xl"
        />

        <template #header>
          <div class="flex flex-col gap-2">
            <h2 class="text-highlighted font-semibold">Component Playground</h2>
            <h2 class="text-muted text-sm font-light italic">Customize & play with component.</h2>
          </div>

          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            @click="open = false"
          />
        </template>
        <template #body>
          <div class="grid grid-cols-1 gap-4 overflow-y-auto p-1">
            <slot name="config" />
          </div>
        </template>
      </UDrawer>
    </div>
  </div>
</template>
