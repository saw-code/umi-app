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
    title: 'Rast',
    locale: true,
    pwa: false,
    logo: 'https://img.icons8.com/ios-filled/50/ffffff/customer-insight.png',
    iconfontUrl: '',
  },
  theme: {
    // Конфигурация темы изменяет значения по умолчанию переменных LESS, используемых Ant.
    'primary-color': '#1895bb',
  },
  define: {
    API_URL: process.env.API_HOST,
  },
  routes: routes, // импортировали пути из файла routes
  fastRefresh: {},
});
