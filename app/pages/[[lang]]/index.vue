<script setup lang="ts">
import type { Collections, ContentNavigationItem, DocsEnCollectionItem } from "@nuxt/content";
import { findPageHeadline } from "@nuxt/content/utils";
import { kebabCase } from "scule";
import { addPrerenderPath } from "@/utils/prerender";

const route = useRoute();
const { locale, isEnabled, t } = useDocusI18n();
const appConfig = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const isRoot = isRootPage();

const isLandingPage = computed(() => {
  return (isEnabled.value ? `/${locale.value}` : "/") === route.path.replace(/\/$/, "");
});

const pageType = isLandingPage.value ? "landing" : "docs";

definePageMeta({
  layout: false,
  middleware: (to) => {
    // Match /en or /en/ (with or without trailing slash)
    const localeMatch = to.path.match(/^\/([a-z]{2})\/?$/);
    const isLanding = to.path === "/" || to.path === "//" || localeMatch !== null;

    setPageLayout(isLanding ? "default" : "docs");
  },
});

const collectionName = computed(() => (isEnabled.value ? `${pageType}_${locale.value}` : pageType));

const [{ data: page }, { data: surround }] = await Promise.all([
  useAsyncData(
    kebabCase(route.path),
    () =>
      queryCollection(collectionName.value as keyof Collections)
        .path(route.path)
        .first() as Promise<DocsEnCollectionItem>,
  ),
  useAsyncData(`${kebabCase(route.path)}-surround`, () => {
    return queryCollectionItemSurroundings(collectionName.value as keyof Collections, route.path, {
      fields: ["description"],
    });
  }),
]);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

// Add the page path to the prerender list
addPrerenderPath(`/raw${route.path}.md`);

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;

useSeoMeta({
  title: isLandingPage.value ? "Inspira UI" : title,
  ogTitle: isLandingPage.value ? "Inspira UI" : title,
  description: isLandingPage.value ? "Build beautiful website using Vue & Nuxt." : description,
  ogDescription: isLandingPage.value ? "Build beautiful website using Vue & Nuxt." : description,
});

const headline = ref(findPageHeadline(navigation?.value, page.value?.path));
watch(
  () => navigation?.value,
  () => {
    headline.value = findPageHeadline(navigation?.value, page.value?.path) || headline.value;
  },
);

defineOgImageComponent("Docs", {
  headline: headline.value,
});

const github = computed(() => (appConfig.github ? appConfig.github : null));

const editLink = computed(() => {
  if (!github.value) {
    return;
  }

  return [
    github.value.url,
    "edit",
    github.value.branch,
    github.value.rootDir,
    "content",
    `${page.value?.stem}.${page.value?.extension}`,
  ]
    .filter(Boolean)
    .join("/");
});
</script>

<template>
  <UPage v-if="page && !isLandingPage">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="headline"
      :ui="{
        wrapper: 'flex-row items-center flex-wrap justify-between',
      }"
    >
      <div
        v-if="page.tags"
        class="mt-4 flex flex-wrap items-center gap-2"
      >
        <UBadge
          v-for="tag in page.tags"
          :key="page.path + tag"
          :label="tag"
          variant="soft"
          class="px-3 py-1 font-normal"
        />
      </div>
      <template #links>
        <UButton
          v-for="(link, index) in (page as DocsEnCollectionItem).links"
          :key="index"
          size="sm"
          v-bind="link"
        />

        <DocsPageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator>
        <div
          v-if="github"
          class="text-muted flex items-center gap-2 text-sm"
        >
          <UButton
            variant="link"
            color="neutral"
            :to="editLink"
            target="_blank"
            icon="i-lucide-pen"
            :ui="{ leadingIcon: 'size-4' }"
          >
            {{ t("docs.edit") }}
          </UButton>
          <span>{{ t("common.or") }}</span>
          <UButton
            variant="link"
            color="neutral"
            :to="`${github.url}/issues/new/choose`"
            target="_blank"
            icon="i-lucide-alert-circle"
            :ui="{ leadingIcon: 'size-4' }"
          >
            {{ t("docs.report") }}
          </UButton>
        </div>
      </USeparator>
      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="!isRoot"
      #right
    >
      <DocsAsideRightBottom />
    </template>
  </UPage>
  <UPage v-else-if="page && isLandingPage">
    <UPageBody class="container mx-auto max-w-6xl px-4">
      <Landing />
    </UPageBody>
  </UPage>
</template>
