import { CListBtn } from '@mxjs/a-clink';
import { Button, Form, Space } from 'antd';
import PropType from 'prop-types';
import useForm from './useForm';
import { Fragment } from 'react';
import { Section } from '@mxjs/a-section';

const FormAction = ({url, list = true, variant = 'card', ...props}) => {
  const {loading} = useForm();
  const Container = variant === 'card' ? Section : Fragment;

  return (
    <Container>
      <Form.Item
        wrapperCol={{offset: 4, span: 8}}
        {...props}
      >
        <Space>
          <Button htmlType="submit" type="primary" loading={loading}>
            提交
          </Button>
          {list && (url ? <Button href={url}>返回列表</Button> : <CListBtn/>)}
        </Space>
      </Form.Item>
    </Container>
  );
};

FormAction.propTypes = {
  url: PropType.string,
  list: PropType.bool,
  variant: PropType.oneOf(['card', 'none']),
};

export default FormAction;
