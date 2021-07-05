import {Col, Form, Input} from 'antd';
import PropTypes from 'prop-types';

const SearchItem = ({children, ...rest}) => {
  return <Col span={8}>
    <Form.Item {...rest}>
      {children ? children : <Input/>}
    </Form.Item>
  </Col>;
};

SearchItem.propTypes = {
  children: PropTypes.node,
};

export default SearchItem;
