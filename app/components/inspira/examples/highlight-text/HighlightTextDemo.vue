<script setup lang="ts">
interface Props {
  highlightColor?: string;
  duration?: number;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  highlightColor: "#f2ad91",
  duration: 1,
  delay: 0.4,
});

const transition = computed(() => ({
  type: "spring",
  duration: props.duration,
  delay: props.delay,
  bounce: 0,
}));

const highlightClass = "rounded-[0.3em] px-px";
const inViewOptions = { once: true, initial: true, amount: 0.1 };
</script>

<template>
  <div class="relative h-full w-full bg-[#fefefe] p-0 text-black">
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-64 bg-linear-to-t from-[#fefefe] from-10% via-[#fefefe]/50 via-50% to-transparent"
    />

    <div class="h-full w-full overflow-y-auto bg-[#fefefe]">
      <div class="mx-auto mt-40 max-w-md px-4 pb-64">
        <h1 class="mb-20 text-4xl font-medium tracking-tight">Typeface alphabets</h1>

        <div class="space-y-4 leading-normal">
          <p>
            The present-day designer has a host of printing types at his disposal.
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              Since Gutenberg first invented movable type in 1436-55
            </HighlightText>
            hundreds of different types have been designed and cast in lead.
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              The most recent technical developments
            </HighlightText>
            with computer and photo-typesetting have once again brought new faces or variations of
            old ones on the market.
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              The choice is up to the designer
            </HighlightText>
            It is left to his feeling for form to use
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              good or poor typefaces
            </HighlightText>
            for his design work. In view of the limited space available, we shall refer here to only
            a few of the outstanding designs of the past and the 20th century which have appeared
            most frequently in publications.
          </p>

          <p>
            Knowledge of the quality of a typeface is of the greatest importance for the
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              functional, aesthetic and psychological effect
            </HighlightText>
            of printed matter. Again, the typographic design, i. e. the correct spaces between
            letters and words and the length and spacing of lines conducive to easy reading, does
            much to enhance the impression created.
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              Today the field is dominated mainly by computer and photo-typesetting
            </HighlightText>
            A typical characteristic of these forms of composition is the too narrow setting of the
            letters which makes reading difficult. The designer will be well advised to demand the
            normal spacing between letters when ordering photo-typesetting.
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              By studying the classic designs
            </HighlightText>
            of
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              Garamond, Casion, Bodoni, Walbaum
            </HighlightText>
            and others, the designer can learn what the timeless criteria are which produce a
            refined and artistic typeface that makes for ease of reading.
          </p>

          <p>
            The lead type designs of
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              Berthold, Helvetica, Folio, Univers
            </HighlightText>
            etc. produce pleasant and easily legible type areas. The typographic rules that apply to
            the roman typefaces are also valid for the sans serifs.
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              The creators of these type designs
            </HighlightText>
            were extremely intelligent artists with high creative powers. This is shown by the fact
            that for more than four centuries innumerable type designers have sought to create new
            type alphabets but very few of these have gained acceptance. An alphabet of Garamond,
            for example, is an artistic achievement of the first order. Each letter has its own
            unmistakable face, whether lower or upper case, and displays the highest quality of form
            and originality. Each letter has its own personality and makes a marked impact.
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              An alphabet of Garamond
            </HighlightText>
            for example, is an artistic achievement of the first order.
          </p>

          <p>
            Every designer who is concerned with typography should take the trouble when creating
            graphic designs to
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              sketch words and sentences by hand
            </HighlightText>
            Many designers take advantage of the Letraset process, which can undoubtedly produce a
            clean draft design that is almost ready for press. But a feeling for good letter forms
            and an attractive typeface can be acquired only by constant and careful practice in
            sketching letters.
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              How the forms of letters can create simultaneously both tension and nobility
            </HighlightText>
            and how pleasantly legible lines of type can appear to the eye of the reader may be seen
            from the examples on the following pages.
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              The Renaissance created midline typography
            </HighlightText>
            which held its position until the 20th century.
          </p>

          <p>
            The new typography differs from the old in that it is the first to try to
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              develop the outward appearance from the function of the text
            </HighlightText>
          </p>

          <p>
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              The new typography uses the background
            </HighlightText>
            as an element of design which is on a par with the other elements.
          </p>

          <p>
            Earlier typography (midline typography)
            <HighlightText
              :class="highlightClass"
              :transition="transition"
              :highlight-color="props.highlightColor"
              :use-in-view-options="inViewOptions"
            >
              played an active role against a dead, passive background.
            </HighlightText>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
