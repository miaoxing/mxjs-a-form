import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import {withRouter} from 'react-router-dom';
import curUrl from '@mxjs/cur-url';
import {Form as AntdForm} from 'antd';
import $ from 'miaoxing';
import allTrim from 'all-trim';

/**
 * 在基础的表单上增加了
 *
 * 1. 简化 Formik 和 form 的层级结构
 * 2. 默认自动从后台读取数据
 * 3. 点击提交数据发送到后台
 * 4. 提交成功后跳转到相应页面
 */
class Form extends React.Component {
  static propTypes = {
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
     * 提交成功后跳转的地址，默认为上一级页面
     */
    redirectUrl: PropTypes.string,

    /**
     * 加载数据后的回调
     */
    afterLoad: PropTypes.func,

    /**
     * 提交前回调
     */
    beforeSubmit: PropTypes.func,

    /**
     * 渲染子组件
     */
    render: PropTypes.func,

    /**
     * HTML form 元素的属性
     */
    formProps: PropTypes.object,

    /**
     * Formik 的属性
     */
    initialValues: PropTypes.object,

    formRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.any})]),

    /**
     * 是否移除提交数据中的空白
     */
    trimSpaces: PropTypes.bool,

    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
    staticContext: PropTypes.object,
  };

  static defaultProps = {
    formRef: React.createRef(),
    trimSpaces: true,
  };

  state = {
    initialValues: this.props.initialValues,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.initialValues && props.initialValues !== state.initialValues) {
      return {
        initialValues: props.initialValues,
      };
    }
    return null;
  }

  handleSubmit = (values) => {
    if (this.props.beforeSubmit) {
      values = this.props.beforeSubmit(values);
    }

    if (this.props.trimSpaces) {
      values = allTrim(values);
    }

    $.http({
      ...this.getUrlAndMethod(),
      data: values,
      loading: true,
    }).then(ret => {
      $.ret(ret).suc(() => {
        this.redirect(this.getRedirectUrl());
      });
    });
  };

  redirect(url) {
    if (url !== this.props.history.location.pathname) {
      this.props.history.push(url);
    }
  }

  getUrlAndMethod() {
    const config = curUrl.apiFormUrlAndMethod();
    if (this.props.url) {
      config.url = this.props.url;
    }
    if (this.props.method) {
      config.method = this.props.method;
    }
    return config;
  }

  getRedirectUrl() {
    return this.props.redirectUrl || curUrl.index();
  }

  getValuesUrl() {
    if (typeof this.props.valuesUrl === 'undefined') {
      return curUrl.apiData();
    }

    return this.props.valuesUrl;
  }

  async componentDidMount() {
    if (this.props.initialValues) {
      return;
    }

    const valuesUrl = this.getValuesUrl();
    if (valuesUrl !== false) {
      // TODO 检查 ret
      const ret = await $.get(valuesUrl);
      if (this.props.afterLoad) {
        this.props.afterLoad(ret);
      }
      this.props.formRef.current.setFieldsValue(this.filterValues(ret.data));
    }
  }

  /**
   * 将输入项的值从 null 转换为空字符,因为 React input 值不允许为 null
   *
   * @param object data
   * @returns object
   */
  filterValues(data) {
    Object.keys(data).forEach(key => {
      if (data[key] === null) {
        data[key] = '';
      }
    });
    return data;
  }

  render() {
    const {
      children, formRef, valuesUrl, redirectUrl, beforeSubmit, staticContext, trimSpaces,
      history, location, match,
      ...props
    } = this.props;
    return (
      <AntdForm
        ref={formRef}
        initialValues={this.state.initialValues}
        labelCol={{span: 4}}
        wrapperCol={{span: 8}}
        onFinish={this.handleSubmit}
        {...props}
      >
        {children}
      </AntdForm>
    );
  }
}

export default withRouter(Form);

