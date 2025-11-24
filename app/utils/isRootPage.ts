export function isRootPage() {
  const { isEnabled, locale } = useDocusI18n();
  const route = useRoute();

  const rootPages = ["/components", "/blocks"];

  return computed(
    () =>
      rootPages.findIndex(
        (item) => (isEnabled.value ? `/${locale.value}${item}` : item) === route.fullPath,
      ) >= 0,
  );
}
