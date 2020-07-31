import React from "react";
import {withTable} from '@mxjs/a-table';
import {Form, Row} from 'antd';

const SearchForm = withTable(({children, table, ...rest}) => {
  return <Form
    labelCol={{span: 8}} wrapperCol={{span: 16}}
    onValuesChange={(changedValues, allValues) => {
      table.handleSearch(allValues);
    }}
    {...rest}
  >
    <Row>
      {children}
    </Row>
  </Form>
});

export default SearchForm;
