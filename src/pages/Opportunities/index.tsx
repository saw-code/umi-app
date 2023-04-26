import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage, getLocale, useAccess } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import columns from './columns';
import { Opportunity } from '@/types/opportunity';
import { listOpportunities } from '@/services/opportunity';

export default function Page() {
  const { canAdmin } = useAccess();

  return (
    <PageContainer style={{ minHeight: '90vh' }}>
      <ProTable<Opportunity>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.opportunity.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        rowSelection={canAdmin && { onChange: () => {} }}
        tableAlertOptionRender={() => <a>Assign</a>}
        request={listOpportunities}
        columns={columns}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
      />
    </PageContainer>
  );
}
