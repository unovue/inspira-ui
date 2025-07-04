import type { App } from "vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
});

function install(app: App) {
  app.use(i18n);
}

// 用于路由 meta 配置，方便在 VSCode I18n Ally 插件进行显示，无实际作用
function $t(key: string) {
  return key;
}

export default { install };

export { $t, i18n };
