import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import Form from '../Form';
import FormItem from '../FormItem';
import {MemoryRouter} from 'react-router';
import $ from 'miaoxing';
import {render} from '@testing-library/react';
import {createPromise} from '@mxjs/test';

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
      code: 1,
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
      code: 1,
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
      code: 1,
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
});
