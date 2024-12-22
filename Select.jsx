import {Select as AntdSelect} from 'antd';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {useState, useEffect} from 'react';

const getOptions = (props) => {
  let options = [];

  if (props.firstLabel) {
    const firstValue = typeof props.firstValue !== 'undefined' ? props.firstValue : 0;
    options.push({
      label: props.firstLabel,
      value: firstValue,
    });
  }

  if (props.all) {
    options.push({
      label: '全部',
      value: '',
    });
  }

  const isArray = Array.isArray(props.options);
  map(props.options, (option, key) => {
    if (typeof option === 'object') {
      options.push({
        label: option[props.labelKey],
        value: option[props.valueKey],
      });
    } else if (isArray) {
      options.push({
        label: option,
        value: option,
      });
    } else {
      options.push({
        label: option,
        value: key,
      });
    }
  });

  return options;
};

const Select = ({options, labelKey, valueKey, all, firstLabel, firstValue, ...props}) => {
  const [opts, setOpts] = useState([]);

  useEffect(() => {
    setOpts(getOptions({options, labelKey, valueKey, all, firstLabel, firstValue}));
  }, [options, labelKey, valueKey, all, firstLabel, firstValue]);

  return <AntdSelect {...props} options={opts} />;
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
