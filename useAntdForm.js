/**
 * @experimental 名称容易冲突，可能要换成其他名字
 */
import { useMemo } from 'react';
import {Form as AntdForm} from 'antd';

class FormApi {
  outputConverters = [];
  inputConverters = [];

  setOutputConverter = (converter) => {
    this.outputConverters.push(converter);
    return this;
  }

  setInputConverter = (converter) => {
    this.inputConverters.push(converter);
    return this;
  }

  convertInput = (values) => {
    this.inputConverters.forEach(converter => {
      values = converter(values);
    });
    return values;
  };

  convertOutput = (values) => {
    this.outputConverters.forEach(converter => {
      values = converter(values);
    });
    return values;
  };
}

export default function useForm() {
  const [form] = AntdForm.useForm();

  const wrapForm = useMemo(() => {
      return {
        ...form,
        ...new FormApi,
      };
    },
    [form],
  );

  return [wrapForm];
}
