import React from "react";
import {Col, Form, Input} from 'antd';

const SearchItem = ({children, ...rest}) => {
  return <Col span={8}>
    <Form.Item {...rest}>
      {children ? children : <Input/>}
    </Form.Item>
  </Col>
}

export default SearchItem;
