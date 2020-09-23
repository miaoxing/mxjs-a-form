import React from 'react';
import {withTable} from '@mxjs/a-table';
import {Form, Row} from 'antd';

const SearchForm = withTable(({children, table, filterValues, ...rest}) => {
  return <Form
    labelCol={{span: 8}} wrapperCol={{span: 16}}
    onValuesChange={(changedValues, allValues) => {
      const values = filterValues ? filterValues(allValues, changedValues) : allValues;
      table.handleSearch(values);
    }}
    {...rest}
  >
    <Row>
      {children}
    </Row>
  </Form>;
});

export default SearchForm;
