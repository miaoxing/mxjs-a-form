import { render } from '@testing-library/react';
import { Form, FormItem } from '..';
import { createRef, useEffect } from 'react';
import $, { Ret } from 'miaoxing';
import { createPromise } from '@mxjs/test';
import useForm from '../useForm';

const Custom = () => {
  const form = useForm();

  useEffect(() => {
    form.setInputConverter(values => {
      values.foo = 'abc';
      return values;
    });
    form.setOutputConverter(values => {
      delete values.foo;
      values.bar = 'bbc';
      return values;
    });
  }, []);

  return '';
};

describe('useForm', () => {
  test('converter', async () => {
    const promise = createPromise();
    const promise2 = createPromise();
    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc({
        data: {},
      }),
    })).mockImplementation(() => promise2.resolve({
      ret: Ret.suc({
        data: {},
      }),
    }));

    const form = createRef();
    const {container, findByDisplayValue} = render(
      <Form
        formRef={form}
      >
        <Custom/>
        <FormItem name="foo"/>
      </Form>
    );

    await findByDisplayValue('abc');
    expect(container.querySelector('#foo').value).toBe('abc');

    form.current.submit();
    await promise2;

    expect($.http).toMatchSnapshot();
  });
});
