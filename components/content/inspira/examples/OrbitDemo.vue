<template>
  <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <span
      class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
    >
      Orbit
    </span>

    <!-- Inner Circles -->
    <Orbit
      class="size-[30px] border-none bg-transparent"
      :duration="20"
      :delay="20"
      :radius="80"
    >
      <WhatsAppIcon />
    </Orbit>
    <Orbit
      class="size-[30px] border-none bg-transparent"
      :duration="20"
      :delay="10"
      :radius="80"
    >
      <NotionIcon />
    </Orbit>

    <!-- Outer Circles (reverse) -->
    <Orbit
      class="size-[50px] border-none bg-transparent"
      :radius="190"
      :duration="20"
      :reverse="true"
    >
      <GoogleDriveIcon />
    </Orbit>
    <Orbit
      class="size-[50px] border-none bg-transparent"
      :radius="190"
      :duration="20"
      :delay="200"
      :reverse="true"
    >
      <GitHubIcon />
    </Orbit>
  </div>
</template>
