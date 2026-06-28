<script lang="ts" setup>
const colorMode = useColorMode();

const isMounted = ref(false);
const isDarkSponsor = computed(() => isMounted.value && colorMode.value === "dark");

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div
    class="rounded-[3rem] bg-[#d5dfe6] p-2 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.62)] ring-1 ring-[#b9c7d0] dark:bg-white/[0.035] dark:shadow-none dark:ring-white/10"
  >
    <div
      class="relative overflow-hidden rounded-[calc(3rem-0.5rem)] border p-6"
      :class="
        isDarkSponsor
          ? 'border-white/10 bg-[#050506] text-[#f5f1e8]'
          : 'border-[#c4d0d8] bg-white text-[#111315]'
      "
    >
      <div
        aria-hidden="true"
        class="absolute -right-14 -bottom-16 size-48 rounded-full blur-3xl"
        :class="isDarkSponsor ? 'bg-[#d6b16a]/12' : 'bg-[#d9c49b]/24'"
      />

      <div class="flex items-start justify-between gap-4">
        <div>
          <p
            class="font-mono text-xs tracking-[0.2em] uppercase"
            :class="isDarkSponsor ? 'text-[#d6b16a]' : 'text-[#947545]'"
          >
            Sponsor
          </p>
          <h3 class="mt-3 text-2xl leading-tight font-semibold tracking-normal">
            Support the project.
          </h3>
        </div>
        <UIcon
          name="i-lucide-heart"
          class="size-5"
          :class="isDarkSponsor ? 'text-[#d6b16a]' : 'text-[#947545]'"
        />
      </div>

      <p
        class="mt-4 text-sm leading-6"
        :class="isDarkSponsor ? 'text-[#a7abb4]' : 'text-[#5d6670]'"
      >
        Sponsorship helps fund maintenance, docs, examples, bug fixes, and new Vue/Nuxt components.
      </p>

      <NuxtLink
        to="https://github.com/sponsors/rahul-vashishtha"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative mt-6 inline-flex h-11 items-center justify-center gap-3 rounded-full px-4 text-sm font-medium transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]"
        :class="isDarkSponsor ? 'bg-[#f5f1e8] text-[#121313]' : 'bg-[#111315] text-white'"
      >
        Become a sponsor
        <span
          class="grid size-7 place-items-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          :class="isDarkSponsor ? 'bg-black/10' : 'bg-white/12'"
        >
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-3.5"
          />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
