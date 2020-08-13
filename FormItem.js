import React from "react";
import PropType from 'prop-types';
import {Form, Input, InputNumber} from 'antd';

export default class extends React.Component {
  static propTypes = {
    children: PropType.node,
    type: PropType.string,
    name: PropType.string,
    required: PropType.bool,
  }

  renderChildren() {
    switch (true) {
      case !!this.props.children:
        return this.props.children;

      case this.props.type === 'plain':
        return ({getFieldValue}) => getFieldValue(this.props.name);

      case this.props.type === 'password':
        return <Input.Password/>;

      case this.props.type === 'hidden':
        return <Input type="hidden"/>;

      case this.props.type === 'number':
        return <InputNumber/>;

      default:
        return <Input/>;
    }
  }

  render() {
    let {required, type, name, ...props} = this.props;

    if (type === 'plain') {
      // 纯文本使用了自定义内容，需启用 shouldUpdate
      props.shouldUpdate = true;
      required = false;
    } else {
      // 纯文本不用 name（If you are using Form.Item as layout display, please remove `name` instead.）
      props.name = name;
    }

    return <Form.Item
      noStyle={type === 'hidden'}
      rules={[{required: required}]}
      {...props}
    >
      {this.renderChildren()}
    </Form.Item>;
  }
}
