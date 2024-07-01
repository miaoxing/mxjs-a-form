import {Modal} from 'antd';
import {useRef, useState} from 'react';
import {Form} from './';
import propTypes from 'prop-types';

const ModalForm = ({open, title, valuesUrl = false, onClose, modalProps = {}, children, ...props}) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      open={open}
      title={title}
      destroyOnClose={true}
      confirmLoading={loading}
      onOk={() => {
        formRef.current.submit();
      }}
      onCancel={onClose}
      {...modalProps}
    >
      <Form
        formRef={formRef}
        labelCol={{span: 6}}
        wrapperCol={{span: 14}}
        // 默认不加载数据
        valuesUrl={valuesUrl}
        redirect={false}
        onLoadingChange={setLoading}
        afterSuc={onClose}
        {...props}
      >
        {children}
      </Form>
    </Modal>
  );
};

ModalForm.propTypes = {
  open: propTypes.bool,
  title: propTypes.string,
  valuesUrl: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  onClose: propTypes.func,
  modalProps: propTypes.object,
  children: propTypes.node,
};

export default ModalForm;
