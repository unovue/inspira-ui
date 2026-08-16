<script setup lang="ts">
import type { UnderlineTextDirection, UnderlineTextVariant } from "../../ui/underline-text";

interface Props {
  variant?: UnderlineTextVariant;
  direction?: UnderlineTextDirection;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "center",
  direction: "left",
});
</script>

<template>
  <div
    class="bg-background text-foreground flex h-full min-h-112 w-full items-start justify-center py-28"
  >
    <div
      class="flex w-full max-w-2xl flex-row items-start gap-8 px-6 text-sm uppercase sm:text-lg md:text-xl lg:text-2xl"
    >
      <div class="text-muted shrink-0">Contact</div>

      <div class="flex flex-col gap-1">
        <a
          href="#"
          class="w-fit"
          @click.prevent
        >
          <UnderlineText
            :variant="props.variant"
            :direction="props.direction"
          >
            LINKEDIN
          </UnderlineText>
        </a>

        <a
          href="#"
          class="w-fit"
          @click.prevent
        >
          <UnderlineText
            variant="comes-in-goes-out"
            direction="right"
          >
            INSTAGRAM
          </UnderlineText>
        </a>

        <a
          href="#"
          class="w-fit"
          @click.prevent
        >
          <UnderlineText
            variant="comes-in-goes-out"
            direction="left"
          >
            X (TWITTER)
          </UnderlineText>
        </a>

        <div class="pt-12">
          <div class="flex flex-col gap-1">
            <a
              href="#"
              class="w-fit"
              @click.prevent
            >
              <UnderlineText
                variant="goes-out-comes-in"
                direction="left"
              >
                hello@rahulv.dev
              </UnderlineText>
            </a>

            <a
              href="#"
              class="w-fit"
              @click.prevent
            >
              <UnderlineText
                variant="goes-out-comes-in"
                direction="right"
              >
                Checkout Akaza UI too.
              </UnderlineText>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
