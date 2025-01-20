<template>
  <div class="flex w-full flex-col flex-wrap gap-4">
    <InspiraCarbonAds class="mb-8" />
    <UiAccordion
      v-if="categories.length > 0"
      v-model="openCategories"
      type="multiple"
    >
      <UiAccordionItem
        v-for="(category, index) in categories"
        :key="`categoryCategory_${category.name + index}`"
        :value="category.category"
      >
        <UiAccordionTrigger>
          <span>{{ index + 1 + ". " + category.name.replaceAll("-", " ") }}</span>
        </UiAccordionTrigger>
        <UiAccordionContent>
          <ClientOnly>
            <CardSpotlight
              v-for="(component, indexJ) in category.components"
              :key="`componentIndex_${component.title + indexJ}`"
              class="relative my-3 h-screen max-h-14 max-w-lg cursor-pointer flex-row items-center justify-between gap-4 overflow-hidden rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
              :gradient-color="gradientColor"
              slot-class="w-full"
            >
              <NuxtLink :to="component.path">
                <div class="flex w-full flex-row items-center justify-center">
                  <div class="mr-2 text-right">{{ indexJ + 1 }}.</div>
                  <div class="mr-2 font-heading">{{ component.title }}</div>
                  <Badge
                    v-for="badge in component.navBadges"
                    :key="`${badge}_${component.title}_${index}`"
                    :type="badge.type"
                  >
                    {{ badge.value }}
                  </Badge>
                  <span class="flex flex-1"></span>
                  <span> View → </span>
                </div>
              </NuxtLink>
            </CardSpotlight>
          </ClientOnly>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

interface Badge {
  type: "default" | "info" | "warning" | "success" | "danger" | "lime" | undefined;
  value: string;
}

interface Component {
  title: string;
  path: string;
  navBadges?: Array<Badge>;
}

interface Category {
  category: string;
  name: string;
  components: Array<Component>;
}

interface Props {
  path?: "components" | "blocks";
}

const props = withDefaults(defineProps<Props>(), {
  path: "components",
});

const query: QueryBuilderParams = {
  path: "/" + props.path,
  where: [
    {
      _extension: "md",
    },
    {
      _path: {
        $contains: props.path,
      },
    },
    {
      $and: [
        {
          title: {
            $ne: "Component Index",
          },
        },
        {
          title: {
            $ne: "Block Index",
          },
        },
      ],
    },
  ],
};

const categories = ref<Array<Category>>([]);
const isDark = computed(() => useColorMode().value == "dark");
const gradientColor = computed(() => (isDark.value ? "#363636" : "#C9C9C9"));
const openCategories = ref<Array<string>>([]);

onMounted(() => {
  groupByCategory();
});

async function groupByCategory() {
  const data = await queryContent(query).find();

  const categoryMap: { [key: string]: Category } = {};

  data.forEach((item) => {
    if (item._dir === "") return;

    const category = item._dir || "root";
    if (!categoryMap[category]) {
      categoryMap[category] = {
        category: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        components: [],
      };
    }

    categoryMap[category].components.push({
      path: item._path as string,
      title: item.title as string,
      navBadges: item.navBadges,
    });
  });

  categories.value = Object.values(categoryMap);
  openCategories.value = categories.value.map((cat) => cat.category);
}
</script>
