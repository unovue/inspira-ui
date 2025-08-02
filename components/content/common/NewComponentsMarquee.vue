<template>
  <div class="relative w-full py-4">
    <!-- Title -->
    <div class="mb-6 text-2xl font-medium z-10">Recently added:</div>
    <!-- Marquee Container -->
    <div class="overflow-hidden relative">
      <!-- Vignette -->
      <div class="pointer-events-none vignette vignette-left"></div>
      <div class="pointer-events-none vignette vignette-right"></div>

      <!-- Marquee Row -->
      <Marquee>
        <div
          v-for="comp in newComponents"
          :key="`new_${comp.path}`"
          class="marquee-card group min-w-[220px] max-w-xs bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl px-6 py-4 flex flex-col items-start justify-center cursor-pointer transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <NuxtLink
            :to="comp.path"
            class="w-full h-full flex flex-col items-start no-underline"
          >
            <div
              class="font-semibold text-lg text-zinc-900 dark:text-white group-hover:text-primary transition"
            >
              {{ comp.name }}
            </div>
            <div class="text-zinc-500 text-sm mt-1">{{ comp.category }}</div>
            <Badge
              type="lime"
              class="mt-2"
            >
              New
            </Badge>
          </NuxtLink>
        </div>
      </Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
const newComponents = ref<{ name: string; category: string; path: string }[]>([]);
const { locale } = useI18nDocs();

onMounted(() => {
  loadNewComponents();
});

async function loadNewComponents() {
  const path = "components"; // or "blocks" if needed

  const data = await queryContent({
    path: "/" + path,
    where: [
      { _extension: "md" },
      { _path: { $contains: path } },
      {
        $and: [{ title: { $ne: "Component Index" } }, { title: { $ne: "Block Index" } }],
      },
    ],
  }).find();

  const results: { name: string; category: string; path: string }[] = [];

  for (const item of data) {
    if (!item._dir) continue;
    if (locale.value === "en" && !item._path.startsWith("/components")) continue;
    if (locale.value !== "en" && item._path.startsWith("/components")) continue;

    // Only components with a lime badge
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hasLimeBadge = (item.navBadges ?? []).some((b: any) => b.type === "lime");
    if (hasLimeBadge) {
      results.push({
        name: item.title,
        category: item._dir.charAt(0).toUpperCase() + item._dir.slice(1),
        path: item._path,
      });
    }
  }

  newComponents.value = results;
}
</script>

<style scoped>
/* Vignette effect */
.vignette {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 2;
  pointer-events: none;
}
.vignette-left {
  left: 0;
  background: linear-gradient(
    to right,
    var(--tw-bg-opacity, 1) rgba(255, 255, 255, 1),
    transparent
  );
  /* dark mode */
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
  }
}
.vignette-right {
  right: 0;
  background: linear-gradient(to left, var(--tw-bg-opacity, 1) rgba(255, 255, 255, 1), transparent);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
  }
}
</style>
