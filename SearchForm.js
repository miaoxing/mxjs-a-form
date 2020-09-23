import React from 'react';
import {withTable} from '@mxjs/a-table';
import {Form, Row} from 'antd';
import FormContext from './FormContext';

const SearchForm = withTable(({children, table, filterValues, ...rest}) => {
  const [form] = Form.useForm();

  return <Form
    form={form}
    labelCol={{span: 8}} wrapperCol={{span: 16}}
    onValuesChange={(changedValues, allValues) => {
      const values = filterValues ? filterValues(allValues, changedValues) : allValues;
      table.handleSearch(values);
    }}
    {...rest}
  >
    <FormContext.Provider value={form}>
      <Row>
        {children}
      </Row>
    </FormContext.Provider>
  </Form>;
});

export default SearchForm;
