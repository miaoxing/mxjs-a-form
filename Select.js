import {Select as AntdSelect} from 'antd';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const {Option} = AntdSelect;

const renderOptions = (props) => {
  let opts = [];

  if (props.firstLabel) {
    const firstValue = typeof props.firstValue !== 'undefined' ? props.firstValue : 0;
    opts.push(<Option key={firstValue} value={firstValue}>{props.firstLabel}</Option>);
  }

  if (props.all) {
    opts.push(<Option key="" value="">全部</Option>);
  }

  const isArray = Array.isArray(props.options);
  map(props.options, (option, key) => {
    if (typeof option === 'object') {
      opts.push(<Option key={option[props.valueKey]} value={option[props.valueKey]}>
        {option[props.labelKey]}
      </Option>);
    } else if (isArray) {
      opts.push(<Option key={option} value={option}>{option}</Option>);
    } else {
      opts.push(<Option key={key} value={key}>{option}</Option>);
    }
  });

  return opts;
};

const Select = ({options, labelKey, valueKey, all, firstLabel, firstValue, ...props}) => {
  return <AntdSelect {...props}>
    {renderOptions({options, labelKey, valueKey, all, firstLabel, firstValue})}
  </AntdSelect>;
};

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
