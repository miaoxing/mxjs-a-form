import { Component } from 'react';
import {Select as AntdSelect} from 'antd';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const {Option} = AntdSelect;

class Select extends Component {
  renderOptions() {
    let options = [];

    if (this.props.firstLabel) {
      const firstValue = typeof this.props.firstValue !== 'undefined' ? this.props.firstValue : 0;
      options.push(<Option key={firstValue} value={firstValue}>{this.props.firstLabel}</Option>);
    }

    if (this.props.all) {
      options.push(<Option key="" value="">全部</Option>);
    }

    const isArray = Array.isArray(this.props.options);
    map(this.props.options, (option, key) => {
      if (typeof option === 'object') {
        options.push(<Option key={option[this.props.valueKey]} value={option[this.props.valueKey]}>
          {option[this.props.labelKey]}
        </Option>);
      } else if (isArray) {
        options.push(<Option key={option} value={option}>{option}</Option>);
      } else {
        options.push(<Option key={key} value={key}>{option}</Option>);
      }
    });

    return options;
  }

  render() {
    const {options, labelKey, valueKey, all, firstLabel, firstValue, ...props} = this.props;

    return <AntdSelect {...props}>
      {this.renderOptions()}
    </AntdSelect>;
  }
}

Select.defaultProps = {
  labelKey: 'label',
  valueKey: 'value',
};

Select.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  all: PropTypes.bool,
  firstLabel: PropTypes.string,
  firstValue: PropTypes.any,
};

export default Select;
