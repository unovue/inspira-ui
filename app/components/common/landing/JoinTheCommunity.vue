<script lang="ts" setup>
const links = [
  {
    icon: "tabler:brand-discord",
    title: "Discord",
    description: "Chat with the community and get help.",
    to: `https://discord.gg/Xbh5DwJRc9`,
    target: "_blank",
  },
  {
    icon: "tabler:brand-x",
    title: "X (Formely Twitter)",
    description: "Follow for updates and sneak peeks.",
    to: `https://x.com/rahulv_dev`,
    target: "_blank",
  },
  {
    icon: "tabler:brand-bluesky",
    title: "BlueSky",
    description: "For indie and alt-web conversations.",
    to: `http://bsky.app/profile/inspira-ui.com`,
    target: "_blank",
  },
  {
    icon: "tabler:brand-github",
    title: "Github",
    description: "Star the repo to support us! ★",
    to: `https://github.com/unovue/inspira-ui`,
    target: "_blank",
  },
];
</script>

<template>
  <UPageSection
    title="Join The Community"
    description="We're building this together. Come say hi, share feedback, or contribute!"
  >
    <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <UPageCard
        v-for="link in links"
        :key="link.to"
        v-bind="link"
        class="bg-default/15 hover:bg-default/25"
      />
    </div>
  </UPageSection>
</template>
