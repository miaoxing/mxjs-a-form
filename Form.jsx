import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import curUrl from '@mxjs/cur-url';
import { Form as AntdForm } from 'antd';
import $ from 'miaoxing';
import allTrim from 'all-trim';
import FormContext from './FormContext';
import useAntdForm from './useAntdForm';

/**
 * 将输入项的值从 null 转换为空字符,因为 React input 值不允许为 null
 *s
 * @param {object} data
 * @returns {object}
 */
function filterValues(data) {
  Object.keys(data).forEach(key => {
    if (data[key] === null) {
      data[key] = '';
    }
  });
  return data;
}

function getUrlAndMethod(url, method) {
  const config = curUrl.apiFormUrlAndMethod();
  if (url) {
    config.url = url;
  }
  if (method) {
    config.method = method;
  }
  return config;
}

function getRedirectUrl(redirectUrl, ret) {
  if (typeof redirectUrl === 'function') {
    return redirectUrl(ret);
  }
  return redirectUrl || curUrl.index();
}

/**
 * 在基础的表单上增加了
 *
 * 1. 默认自动从后台读取数据
 * 2. 点击提交数据发送到后台
 * 3. 提交成功后跳转到相应页面
 */
const Form = (
  {
    children,
    valuesUrl,
    afterLoad,
    beforeSubmit,
    onLoadingChange,
    onSubmit,
    afterSubmit,
    afterSuc,
    trimSpaces,
    url,
    method,
    redirect = true,
    redirectUrl,
    formRef,
    ...rest
  },
) => {
  const [form] = useAntdForm();
  const isMounted = useRef(false);

  const [loading, setLoading] = useState(false);
  const changeLoading = (loading) => {
    setLoading(loading);
    onLoadingChange && onLoadingChange(loading);
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const loadInitialValues = async () => {
    if (rest.initialValues) {
      return;
    }

    valuesUrl = typeof valuesUrl === 'undefined' ? curUrl.apiData() : valuesUrl;
    if (valuesUrl === false) {
      return;
    }

    const res = await $.get({
      url: valuesUrl,
      loading: true,
    });
    if (res.ret.isErr()) {
      $.ret(res.ret);
      return;
    }

    if (afterLoad) {
      await afterLoad(res.ret);
    }
    form.setFieldsValue(form.convertInput(filterValues(res.ret.data)));
  };

  // 默认自动从后台读取数据
  useEffect(() => {
    loadInitialValues();
  }, [rest.initialValues]);

  const handleFinish = async (values) => {
    changeLoading(true);
    try {
      await handleSubmit(values);
    } finally {
      changeLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    values = form.convertOutput(values);

    if (beforeSubmit) {
      values = await beforeSubmit(values);
      if (values === false) {
        return;
      }
    }

    if (trimSpaces) {
      values = allTrim(values);
    }

    if (onSubmit) {
      const ret = await onSubmit(values);
      afterSubmit && afterSubmit(ret, form);
      return;
    }

    const { ret } = await $.http({
      ...getUrlAndMethod(url, method),
      data: values,
      loading: true,
    });
    afterSubmit && afterSubmit(ret, form);

    $.ret(ret);
    if (ret.isSuc()) {
      if (!isMounted.current) {
        return;
      }
      afterSuc && afterSuc(ret);
      if (redirect) {
        $.to(getRedirectUrl(redirectUrl, ret));
      }
    }
  };

  return (
    <>
      <FormContext.Provider value={{ ...form, loading }}>
        <AntdForm
          form={form}
          ref={formRef}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          scrollToFirstError={true}
          onFinish={handleFinish}
          {...rest}
        >
          {children}
        </AntdForm>
      </FormContext.Provider>
    </>
  );
};

Form.propTypes = {
  /**
   * 提交到后台的地址，默认自动识别为当前表单地址
   */
  url: PropTypes.string,

  /**
   * 提交到后台的方法
   */
  method: PropTypes.string,

  /**
   * 获取表单数据的后台地址
   */
  valuesUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /**
   * 提交表单后是否跳转
   */
  redirect: PropTypes.bool,

  /**
   * 提交成功后跳转的地址，默认为上一级页面
   */
  redirectUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * 加载数据后的回调
   */
  afterLoad: PropTypes.func,

  /**
   * 加载中状态变化的回调
   */
  onLoadingChange: PropTypes.func,

  /**
   * 提交前回调
   */
  beforeSubmit: PropTypes.func,

  /**
   * 自定义提交流程
   */
  onSubmit: PropTypes.func,

  /**
   * 提交后回调
   */
  afterSubmit: PropTypes.func,

  /**
   * 提交后成功回调
   */
  afterSuc: PropTypes.func,

  /**
   * 渲染子组件
   */
  render: PropTypes.func,

  /**
   * HTML form 元素的属性
   */
  formProps: PropTypes.object,

  formRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),

  /**
   * 是否移除提交数据中的空白
   */
  trimSpaces: PropTypes.bool,

  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Form;
