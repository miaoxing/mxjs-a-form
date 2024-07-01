import { createRef } from 'react';
import Form from '../Form';
import FormItem from '../FormItem';
import { MemoryRouter } from 'react-router';
import $, { Ret } from 'miaoxing';
import { render, waitFor } from '@testing-library/react';
import { bootstrap, createPromise, setUrl } from '@mxjs/test';

describe('Form', () => {
  test('initialValues', async () => {
    const {container} = render(<MemoryRouter>
      <Form
        initialValues={{
          foo: 1,
          bar: 2,
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    expect(container.querySelector('#foo').value).toBe('1');
    expect(container.querySelector('#bar').value).toBe('2');
  });

  test('valuesUrl', async () => {
    const promise = createPromise();
    $.get = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc({
        data: {
          foo: 3,
          bar: 4,
        },
      }),
    }));

    const {container} = render(<MemoryRouter>
      <Form
        valuesUrl="test"
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    await promise;

    await waitFor(() => {
      expect(container.querySelector('#foo').value).toBe('3');
    });

    expect(container.querySelector('#bar').value).toBe('4');
  });

  test('beforeSubmit', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    const form = createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
        beforeSubmit={(values) => {
          values.foo = 3;
          delete values.bar;
          return values;
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise;

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });

  test('beforeSubmit return false', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    const form = createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
        beforeSubmit={() => {
          return false;
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    expect($.http).toHaveBeenCalledTimes(0);
  });

  test('submit', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    const form = createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise;

    expect($.http).toHaveBeenCalledTimes(1);
  });

  test('afterSubmit', async () => {
    const promise = createPromise();
    const promise2 = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    let afterSubmitRet = {};
    const form = createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
        afterSubmit={(ret) => {
          afterSubmitRet = ret;
          promise2.resolve();
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise2;

    expect($.http).toHaveBeenCalledTimes(1);

    expect(afterSubmitRet).toEqual(Ret.suc());
  });

  test('afterSuc', async () => {
    const promise = createPromise();
    const promise2 = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    let afterSucRet = {};
    const form = createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
        afterSuc={(ret) => {
          afterSucRet = ret;
          promise2.resolve();
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise2;

    expect($.http).toHaveBeenCalledTimes(1);

    expect(afterSucRet).toEqual(Ret.suc());
  });

  test('redirectUrl fn', async () => {
    bootstrap();
    setUrl('/');

    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc({
        message: 'success',
      }),
    }));

    const form = createRef();
    render(<MemoryRouter>
      <Form
        redirectUrl={(ret) => {
          return 'url/' + ret.message + '/' + ret.code;
        }}
        url="test"
        initialValues={{
          foo: 1,
          bar: 2,
        }}
        formRef={form}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise;

    await waitFor(() => {
      expect(window.location.href).toBe('/url/success/0');
    });

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });

  test('redirect', async () => {
    setUrl('/');

    expect(window.location.href).toBe('http://localhost/');

    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc(),
    }));

    const form = createRef();
    render(<MemoryRouter>
      <Form
        redirect={false}
        url="test"
        formRef={form}
        initialValues={{}}
      >
        <FormItem name="foo"/>
      </Form>
    </MemoryRouter>);

    form.current.submit();

    await promise;

    // wait for $.ret(ret).suc() to execute
    await new Promise(r => setTimeout(r, 100));

    // wont change
    expect(window.location.href).toBe('http://localhost/');

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });

  test('afterLoad async', async () => {
    const promise = createPromise();
    $.get = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: Ret.suc({
        data: {
          foo: 3,
          bar: 4,
        },
      }),
    }));

    const {container} = render(<MemoryRouter>
      <Form
        valuesUrl="test"
        afterLoad={async ({ret}) => {
          ret.data.foo = 4;
          ret.data.bar = 5;
        }}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>);

    await waitFor(() => {
      expect(container.querySelector('#foo').value).toBe('4');
      expect(container.querySelector('#bar').value).toBe('5');
    });
  });
});
