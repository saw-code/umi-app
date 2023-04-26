import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { ProTable } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import columns from '../Opportunities/columns';
import initialState from '@@/plugin-initial-state/models/initialState';
import { useModel } from '@@/plugin-model/useModel';

// Теперь мы добавим некоторую основную информацию к содержимому PageContainer. Мы
// хочу, чтобы когда пользователь входит в приложение, он видел последующее приветствие
// по имени, роли и аватару

export default function IndexPage() {
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer
      header={{ title: undefined }}
      style={{ minHeight: '90vh' }}
      content={
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar
              alt="avatar"
              className={styles.avatarComponent}
              size={{
                xs: 64,
                sm: 64,
                md: 64,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={<UserOutlined />}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              <FormattedMessage id="greetings.hello" />
              {initialState?.currentUser?.name},{' '}
              <FormattedMessage id="greetings.welcome" />.
            </div>
            <div>
              {initialState?.currentUser?.role?.title} |{' '}
              {initialState?.currentUser?.company}
            </div>
          </div>
        </div>
      }
    >
      <div style={{ width: '100%' }}>
        <ProTable<any>
          headerTitle={<FormattedMessage id="home.recents" />}
          pagination={{ pageSize: 5 }}
          rowKey="id"
          search={false}
        />
      </div>
    </PageContainer>
  );
}

// Здесь мы добавили компонент Avatar из antd, а затем приветствие,
// имя пользователя и роль.
