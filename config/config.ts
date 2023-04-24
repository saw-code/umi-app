import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  locale: {
    default: 'en-US', // язык приложения по умолчанию.
    antd: true, // включить интернационализацию компонентов Ant Design
    baseNavigator: true, // включить определение языка браузера.
    baseSeparator: '-', // разделитель, используемый в многоязычных файлах, локализованных под папку src/locales.
  },
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    navTheme: 'light',
    layout: 'mix',
    contentWidth: 'fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'Umi CRM',
    locale: true,
    pwa: false,
    logo: 'https://img.icons8.com/ios-filled/50/ffffff/customer-insight.png',
    iconfontUrl: '',
  },
  routes: routes, // импортировали пути из файла routes
  fastRefresh: {},
});
