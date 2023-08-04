import { Component } from 'react';
import PropType from 'prop-types';
import {Form, InputNumber} from 'antd';
import Input from '@mxjs/a-input';

export default class extends Component {
  static propTypes = {
    children: PropType.node,
    type: PropType.string,
    name: PropType.oneOfType([PropType.string, PropType.array]),
    required: PropType.bool,
    messageVariables: PropType.objectOf(PropType.string),
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

      case this.props.type === 'textarea':
        return <Input.TextArea/>;

      default:
        return <Input/>;
    }
  }

  render() {
    let {required, type, name, messageVariables = {}, ...props} = this.props;

    if (type === 'plain') {
      // 纯文本使用了自定义内容，需启用 shouldUpdate
      props.shouldUpdate = true;
      required = false;
    } else {
      // 纯文本不用 name（If you are using Form.Item as layout display, please remove `name` instead.）
      props.name = name;
    }

    if (!props.label) {
      messageVariables.label = '该项';
    }

    return <Form.Item
      noStyle={type === 'hidden'}
      required={required}
      rules={[{required: required}]}
      messageVariables={messageVariables}
      {...props}
    >
      {this.renderChildren()}
    </Form.Item>;
  }
}
