<script setup lang="ts">
const open = ref(false);
const refreshKey = ref(0);

const isDesktop = useMediaQuery("(min-width: 768px)");

function refreshPreview() {
  refreshKey.value += 1;
}
</script>

<template>
  <div class="flex w-full flex-col items-start justify-start gap-4">
    <div
      class="bg-elevated/70 ring-default/70 relative w-full overflow-hidden rounded-[2.5rem] p-2 shadow-[0_28px_90px_-58px_rgba(15,23,42,0.62)] ring dark:bg-white/[0.035] dark:shadow-none"
    >
      <div
        class="bg-default ring-default/70 relative min-h-[22rem] overflow-hidden rounded-[calc(2.5rem-0.5rem)] ring sm:min-h-[24rem]"
      >
        <div
          aria-hidden="true"
          class="bg-primary/8 pointer-events-none absolute top-0 right-12 size-56 rounded-full blur-3xl"
        />

        <div class="absolute top-4 right-4 z-40 flex items-center gap-2">
          <UButton
            icon="i-lucide-refresh-cw"
            color="neutral"
            variant="subtle"
            size="sm"
            aria-label="Refresh preview"
            title="Refresh preview"
            class="grid size-9 place-items-center rounded-full p-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            :ui="{ leadingIcon: 'size-4 shrink-0' }"
            @click="refreshPreview"
          />
          <UButton
            v-if="$slots.config"
            icon="i-lucide-sliders-horizontal"
            color="neutral"
            variant="solid"
            size="sm"
            aria-label="Customize props"
            title="Customize props"
            class="grid size-9 place-items-center rounded-full p-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            :ui="{ leadingIcon: 'size-4 shrink-0' }"
            @click="open = true"
          />
        </div>

        <div
          :key="refreshKey"
          class="relative flex min-h-[22rem] items-center justify-center p-6 sm:min-h-[24rem] sm:p-10"
        >
          <slot name="component" />
        </div>
      </div>
    </div>

    <UDrawer
      v-if="$slots.config"
      v-model:open="open"
      :direction="isDesktop ? 'right' : 'bottom'"
      :overlay="!isDesktop"
      :dismissible="!isDesktop"
      :handle="false"
      :modal="!isDesktop"
      :inset="isDesktop"
      :ui="{
        header: 'flex items-center justify-between border-b border-muted pb-4',
        content: 'bg-default/95 md:min-w-112',
        body: 'p-0',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-1">
          <h2 class="text-highlighted font-semibold">Customize props</h2>
          <p class="text-muted text-sm">Adjust values for this preview.</p>
        </div>

        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-x"
          aria-label="Close customize panel"
          @click="open = false"
        />
      </template>
      <template #body>
        <div class="grid grid-cols-1 gap-4 overflow-y-auto p-4">
          <slot name="config" />
        </div>
      </template>
    </UDrawer>
  </div>
</template>
