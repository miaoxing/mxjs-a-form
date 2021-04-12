import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import Form from '../Form';
import FormItem from '../FormItem';
import {MemoryRouter, Router} from 'react-router';
import $, {Ret} from 'miaoxing';
import {render, waitFor} from '@testing-library/react';
import {createPromise} from '@mxjs/test';
import {createMemoryHistory} from 'history';

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
      data: {
        foo: 3,
        bar: 4,
      },
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

    expect(container.querySelector('#foo').value).toBe('3');
    expect(container.querySelector('#bar').value).toBe('4');
  });

  test('beforeSubmit', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      code: 0,
      message: 'success',
    }));

    const form = React.createRef();
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
      code: 0,
      message: 'success',
    }));

    const form = React.createRef();
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
      code: 0,
      message: 'success',
    }));

    const form = React.createRef();
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

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve(Ret.new({
      code: 0,
      message: 'success',
    })));

    let afterSubmitRet = {};
    const form = React.createRef();
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

    expect(afterSubmitRet).toEqual({code: 0, message: 'success'});
  });

  test('redirectUrl fn', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      code: 0,
      message: 'success',
    }));

    const history = createMemoryHistory();
    const form = React.createRef();
    render(<Router history={history}>
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
    </Router>);

    form.current.submit();

    await promise;

    await waitFor(() => {
      expect(history.location.pathname).toBe('/url/success/0');
    });

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });

  test('redirect', async () => {
    const promise = createPromise();

    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      code: 0,
      message: 'success',
    }));

    const history = createMemoryHistory();

    history.push('/test');
    expect(history.length).toBe(2);

    const form = React.createRef();
    render(<Router history={history}>
      <Form
        redirect={false}
        url="test"
        formRef={form}
        initialValues={{}}
      >
        <FormItem name="foo"/>
      </Form>
    </Router>);

    form.current.submit();

    await promise;

    // wait for $.ret(ret).suc() to execute
    await new Promise(r => setTimeout(r, 100));

    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/test');

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });

  test('afterLoad async', async () => {
    const promise = createPromise();
    $.get = jest.fn().mockImplementationOnce(() => promise.resolve({
      data: {
        foo: 3,
        bar: 4,
      },
    }));

    const {container} = render(<MemoryRouter>
      <Form
        valuesUrl="test"
        afterLoad={async (ret) => {
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
