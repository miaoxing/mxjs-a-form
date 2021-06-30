import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import curUrl from '@mxjs/cur-url';
import {Form as AntdForm} from 'antd';
import $ from 'miaoxing';
import allTrim from 'all-trim';
import FormContext from './FormContext';
import useAntdForm from './useAntdForm';
import {useHistory} from 'react-router';

/**
 * 将输入项的值从 null 转换为空字符,因为 React input 值不允许为 null
 *s
 * @param {object} data
 * @returns Store
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
    initialValues,
    valuesUrl,
    afterLoad,
    beforeSubmit,
    afterSubmit,
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
  const history = useHistory();

  // 默认自动从后台读取数据
  useEffect(() => {
    async function fetchData() {
      if (initialValues) {
        return;
      }

      valuesUrl = typeof valuesUrl === 'undefined' ? curUrl.apiData() : valuesUrl;
      if (valuesUrl !== false) {
        // TODO 检查 ret
        const res = await $.get(valuesUrl);
        if (afterLoad) {
          await afterLoad(res);
        }
        form.setFieldsValue(form.convertInput(filterValues(res.ret.data)));
      }
    }

    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, [initialValues]);

  return <FormContext.Provider value={form}>
    <AntdForm
      form={form}
      ref={formRef}
      initialValues={initialValues}
      labelCol={{span: 4}}
      wrapperCol={{span: 8}}
      scrollToFirstError={true}
      onFinish={(values) => {
        values = form.convertOutput(values);

        if (beforeSubmit) {
          values = beforeSubmit(values);
          if (values === false) {
            return;
          }
        }

        if (trimSpaces) {
          values = allTrim(values);
        }

        $.http({
          ...getUrlAndMethod(url, method),
          data: values,
          loading: true,
        }).then(({ret}) => {
          afterSubmit && afterSubmit(ret, form);

          $.ret(ret).suc(() => {
            if (redirect) {
              const url = getRedirectUrl(redirectUrl, ret);
              if (url !== history.location.pathname) {
                history.push(url);
              }
            }
          });
        });
      }}
      {...rest}
    >
      {children}
    </AntdForm>
  </FormContext.Provider>;
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
   * 提交前回调
   */
  beforeSubmit: PropTypes.func,

  /**
   * 提交后回调
   */
  afterSubmit: PropTypes.func,

  /**
   * 渲染子组件
   */
  render: PropTypes.func,

  /**
   * HTML form 元素的属性
   */
  formProps: PropTypes.object,

  initialValues: PropTypes.object,

  formRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.any})]),

  /**
   * 是否移除提交数据中的空白
   */
  trimSpaces: PropTypes.bool,

  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Form;
