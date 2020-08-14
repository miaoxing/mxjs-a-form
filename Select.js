import React from 'react';
import {Select as AntdSelect} from 'antd';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const {Option} = AntdSelect;

class Select extends React.Component {
  renderOptions() {
    let options = [];

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
    const {options, labelKey, valueKey, all, ...props} = this.props;

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
};

export default Select;
