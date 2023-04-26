import { Avatar, Dropdown, Menu } from 'antd';
import styles from './index.less';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useModel } from 'umi';
import React from 'react';

export default function HeaderMenu() {
  // @ts-ignore
  const { initialState, setInitialState } = useModel('@@initialState');

  const userLogout = () => {
    initialState?.logout?.();
    // @ts-ignore
    setInitialState((state) => ({
      ...state,
      currentUser: undefined,
    }));
  };

  const options = (
    <Menu className={styles.menu} onClick={userLogout}>
      <Menu.Item key="center">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown className={styles.dropdown} overlay={options}>
      <span>
        <Avatar
          size="small"
          className={styles.avatar}
          icon={<UserOutlined />}
        />
        <span className={`${styles.name} anticon`}>
          {initialState?.currentUser?.name}
        </span>
      </span>
    </Dropdown>
  );
}

// В этом компоненте мы используем компонент меню библиотеки antd для отображения выхода из системы.
// Пункт меню и компоненты «Раскрывающийся список» и «Аватар» для рендера пользовательского
// аватара и имени пользователя. Опция выхода появится при наведении курсора на
// имя пользователя или аватар.
