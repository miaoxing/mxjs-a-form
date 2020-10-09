import React from 'react';
import {withTable} from '@mxjs/a-table';
import {Form, Row} from 'antd';
import FormContext from './FormContext';
import useAntdForm from './useAntdForm';

const SearchForm = withTable(({children, table, filterValues, ...rest}) => {
  const [form] = useAntdForm();

  return (
    <FormContext.Provider value={form}>
      <Form
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onValuesChange={(changedValues, allValues) => {
          const values = form.convertOutput(filterValues ? filterValues(allValues, changedValues) : allValues);
          table.handleSearch(values);
        }}
        {...rest}
      >
        <Row>
          {children}
        </Row>
      </Form>
    </FormContext.Provider>
  );
});

export default SearchForm;
