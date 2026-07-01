<script setup lang="ts">
import { DialRoot, useDialKit } from "dialkit/vue";

function transformControls(translateZ: number) {
  return {
    translateX: [0, -120, 120, 1],
    translateY: [0, -120, 120, 1],
    translateZ: [translateZ, 0, 180, 1],
    rotateX: [0, -180, 180, 1],
    rotateY: [0, -180, 180, 1],
    rotateZ: [0, -180, 180, 1],
  };
}

const config = useDialKit(
  "",
  {
    title: transformControls(50),
    description: transformControls(60),
    image: transformControls(100),
    btnLeft: transformControls(20),
    btnRight: transformControls(20),
  },
  {
    id: "card-3d",
    persist: false,
  },
);
</script>

<template>
  <ComponentPlayground>
    <template #component>
      <CardDemo v-bind="config" />
    </template>

    <template #config>
      <div class="dialkit-config-shell">
        <DialRoot
          mode="inline"
          theme="system"
          :production-enabled="true"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>

<style scoped>
.dialkit-config-shell {
  min-height: 100%;
}

.dialkit-config-shell :deep(.dialkit-root) {
  --dial-glass-bg: ;
  --dial-dropdown-bg: color-mix(in oklab, var(--ui-bg-elevated) 94%, transparent);
  --dial-surface: color-mix(in oklab, var(--ui-bg-elevated) 58%, transparent);
  --dial-surface-hover: color-mix(in oklab, var(--ui-bg-elevated) 78%, transparent);
  --dial-surface-active: color-mix(in oklab, var(--ui-bg-accented) 72%, transparent);
  --dial-surface-subtle: color-mix(in oklab, var(--ui-border-muted) 48%, transparent);
  --dial-border: color-mix(in oklab, var(--ui-border) 70%, transparent);
  --dial-border-hover: color-mix(in oklab, var(--ui-border-accented) 74%, transparent);
  --dial-text-root: var(--ui-text-highlighted);
  --dial-text-section: var(--ui-text);
  --dial-text-label: var(--ui-text-muted);
  --dial-text-focus: var(--ui-text-highlighted);
  --dial-text-primary: var(--ui-text-highlighted);
  --dial-text-secondary: var(--ui-text-muted);
  --dial-text-tertiary: var(--ui-text-dimmed);
  --dial-radius: 1rem;
  --dial-row-height: 2.625rem;
  font-family: inherit;
}

.dialkit-config-shell :deep(.dialkit-panel-inline) {
  background: transparent;
  padding: 0;
}

.dialkit-config-shell :deep(.dialkit-panel-inner) {
  background:
    radial-gradient(
      circle at 92% 0,
      color-mix(in oklab, var(--ui-primary) 9%, transparent),
      transparent 38%
    ),
    var(--dial-glass-bg);
}

.dialkit-config-shell :deep(.dialkit-folder:not(.dialkit-folder-root)) {
  border-radius: 1rem;
  background: color-mix(in oklab, var(--ui-bg-elevated) 42%, transparent);
  border: 1px solid color-mix(in oklab, var(--ui-border-muted) 62%, transparent);
  margin-bottom: 0.625rem;
  padding: 0.625rem;
}

.dialkit-config-shell :deep(.dialkit-folder-title) {
  letter-spacing: 0;
}
</style>
