import { withTable } from '@mxjs/a-table';
import { Button, Col, Form, Row, Space } from 'antd';
import FormContext from './FormContext';
import useAntdForm from './useAntdForm';
import { SearchItem } from './index';

const SearchForm = withTable(({children, table, filterValues, actions, ...rest}) => {
  const [form] = useAntdForm();

  return (
    <FormContext.Provider value={form}>
      <Form
        form={form}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onFinish={(allValues) => {
          const values = form.convertOutput(filterValues ? filterValues(allValues) : allValues);
          table.addSearch(values);
          table.reload();
        }}
        {...rest}
      >
        <Row>
          {children}
          <Col span={24}>
            <SearchItem wrapperCol={{offset: 8}}>
              <Space>
                <Button htmlType="submit">
                  搜索
                </Button>
                {actions}
              </Space>
            </SearchItem>
          </Col>
        </Row>
      </Form>
    </FormContext.Provider>
  );
});

export default SearchForm;
