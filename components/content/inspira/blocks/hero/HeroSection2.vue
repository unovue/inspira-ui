<template>
  <section class="relative mx-auto h-screen w-full overflow-hidden">
    <Vortex
      background-color="black"
      :range-y="800"
      :particle-count="500"
      :base-hue="120"
      class="absolute inset-0 flex items-center justify-center px-8"
    >
      <div class="flex size-full max-w-6xl flex-col md:flex-row">
        <div
          class="flex size-full h-[36rem] flex-col items-center justify-center md:h-full md:items-start md:p-8"
        >
          <span
            class="inline-block gap-2 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-5xl font-bold text-transparent md:text-left md:text-6xl"
          >
            Build beautiful websites with
            <TextHighlight
              class="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1"
              text-end-color="hsl(var(--accent))"
            >
              Inspira UI
            </TextHighlight>
          </span>
          <span class="flex w-full flex-row justify-center py-6 md:justify-start">
            <AnimatedTooltip :items="people" />
          </span>
          <UiButton>Get Started</UiButton>
        </div>
        <div class="relative flex flex-col items-center justify-center overflow-hidden md:max-w-96">
          <div class="relative flex size-fit flex-col items-center justify-center rounded-3xl">
            <CardContainer>
              <CardBody
                class="group/card h-fit w-full gap-2 rounded-xl border border-black/[0.1] bg-gray-50 px-4 py-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="25"
                  class="mb-4 w-full"
                >
                  <NuxtImg
                    src="/og-image.png"
                    height="auto"
                    width="auto"
                    class="h-24 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="logo"
                    crossorigin="anonymous"
                  />
                </CardItem>

                <CardItem
                  as="p"
                  translate-z="25"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  Subscribe to newletter & get latest update from Inspira UI.
                </CardItem>

                <CardItem class="mt-4 flex w-full flex-col gap-4">
                  <IInput placeholder="Enter email"></IInput>
                  <UiButton>Sign Me Up!</UiButton>
                </CardItem>
              </CardBody>
            </CardContainer>
            <BorderBeam
              :size="250"
              :duration="12"
              :delay="9"
              :border-width="2"
            />
          </div>
        </div>
      </div>
    </Vortex>
  </section>
</template>

<script lang="ts" setup>
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
</script>
