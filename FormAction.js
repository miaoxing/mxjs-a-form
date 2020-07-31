import React from 'react';
import {CListBtn} from "@mxjs/a-clink";
import {Button, Form} from 'antd';
import {Box} from "rebass";

function FormAction({url, list = true}) {
  return (
    <Form.Item
      wrapperCol={{offset: 4, span: 8}}
    >
      <Button htmlType="submit" type="primary">
        提交
      </Button>
      <Box ml={3} display="inline-block">
        {list && (url ? <Button href={url}>返回列表</Button> : <CListBtn/>)}
      </Box>
    </Form.Item>
  );
}

export default FormAction;
