import en from "./locales/en.json";
import zhCn from "./locales/zh-cn.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    "zh-cn": zhCn,
  },
}));
