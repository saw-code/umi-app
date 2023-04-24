import { Avatar, Dropdown, Menu } from 'antd';
import styles from './index.less';
import { LogoutOutlined } from '@ant-design/icons';

export default function HeaderMenu() {
  const options = (
    <Menu className={styles.menu}>
      <Menu.Item key="center">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={styles.dropdown} overlay={options}>
      <span>
        <Avatar size="small" className={styles.avatar} />
        <span className={`${styles.name} anticon`}>Емельянов Сергей</span>
      </span>
    </Dropdown>
  );
}

// В этом компоненте мы используем компонент меню библиотеки antd для отображения выхода из системы.
// Пункт меню и компоненты «Раскрывающийся список» и «Аватар» для рендера пользовательского
// аватара и имени пользователя. Опция выхода появится при наведении курсора на
// имя пользователя или аватар.
