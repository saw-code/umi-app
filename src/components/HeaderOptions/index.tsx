import { Space } from 'antd';
import { SelectLang } from 'umi';
import HeaderMenu from '../HeaderMenu';

export default function HeaderOptions() {
  return (
    <Space>
      <HeaderMenu />
      <SelectLang />
    </Space>
  );
}

// В этом компоненте мы используем Space компонент antd и недавно созданный
// компонент HeaderMenu с компонентом SelectLang из UmiJS для рендера
// параметров заголовка макета.
