// Umi использует файл с именем app.tsx для
// расширения конфигураций нашего приложения во время выполнения.
// Этот файл полезен для настройки начального состояния с помощью
// плагина начального состояния и макета использующего плагин макета.

import routes from '../config/routes';
import { RunTimeLayoutConfig } from 'umi';
import HeaderOptions from './components/HeaderOptions';

// В этой конфигурации мы устанавливаем макет плагина маршрутов, который будет отображаться на
// боковое меню.
export const layout: RunTimeLayoutConfig = () => {
  return {
    routes,
    rightContentRender: () => <HeaderOptions />,
    onPageChange: () => {},
  };
};
