import {CListBtn} from '@mxjs/a-clink';
import {Button, Form} from 'antd';
import {Box} from '@mxjs/box';
import PropType from 'prop-types';
import useForm from './useForm';

const FormAction = ({url, list = true, ...props}) => {
  const {loading} = useForm();

  return (
    <Form.Item
      wrapperCol={{offset: 4, span: 8}}
      {...props}
    >
      <Button htmlType="submit" type="primary" loading={loading}>
        提交
      </Button>
      <Box ml3 inlineBlock>
        {list && (url ? <Button href={url}>返回列表</Button> : <CListBtn/>)}
      </Box>
    </Form.Item>
  );
};

FormAction.propTypes = {
  url: PropType.string,
  list: PropType.bool,
};

export default FormAction;
