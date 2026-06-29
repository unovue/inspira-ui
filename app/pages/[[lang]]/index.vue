<script setup lang="ts">
import type { Collections, ContentNavigationItem, DocsEnCollectionItem } from "@nuxt/content";
import { findPageHeadline } from "@nuxt/content/utils";
import { kebabCase } from "scule";
import { addPrerenderPath } from "@/utils/prerender";

const localeRouteRe = /^\/([a-z]{2})\/?$/;
const trailingSlashRe = /\/$/;

const route = useRoute();
const { locale, isEnabled, t } = useDocusI18n();
const appConfig = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const docsPageUi = useDocsPageUi();

const isRoot = isRootPage();

const isLandingPage = computed(() => {
  return (isEnabled.value ? `/${locale.value}` : "/") === route.path.replace(trailingSlashRe, "");
});

const pageType = isLandingPage.value ? "landing" : "docs";

definePageMeta({
  layout: false,
  middleware: (to) => {
    // Match /en or /en/ (with or without trailing slash)
    const localeMatch = to.path.match(localeRouteRe);
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
      :ui="docsPageUi.header"
    >
      <div
        v-if="page.tags"
        class="mt-4 flex flex-wrap items-center gap-2"
      >
        <UBadge
          v-for="tag in page.tags"
          :key="page.path + tag"
          :label="tag"
          color="neutral"
          variant="subtle"
          size="sm"
          :ui="docsPageUi.badge"
        />
      </div>
      <template #links>
        <UButton
          v-for="(link, index) in (page as DocsEnCollectionItem).links"
          :key="index"
          v-bind="link"
          size="sm"
          color="neutral"
          variant="subtle"
          :class="docsPageUi.headerLinkButton"
        />

        <DocsPageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody :class="docsPageUi.bodyClass">
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator class="my-12">
        <div
          v-if="github"
          :class="docsPageUi.footerActions"
        >
          <UButton
            color="neutral"
            variant="ghost"
            size="xs"
            :to="editLink"
            target="_blank"
            icon="i-lucide-pen"
            class="rounded-full"
            :ui="docsPageUi.footerButton"
          >
            {{ t("docs.edit") }}
          </UButton>
          <span class="px-1 text-muted">{{ t("common.or") }}</span>
          <UButton
            color="neutral"
            variant="ghost"
            size="xs"
            :to="`${github.url}/issues/new/choose`"
            target="_blank"
            icon="i-lucide-alert-circle"
            class="rounded-full"
            :ui="docsPageUi.footerButton"
          >
            {{ t("docs.report") }}
          </UButton>
        </div>
      </USeparator>
      <UContentSurround
        :surround="surround"
        :ui="docsPageUi.surround"
      />
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
