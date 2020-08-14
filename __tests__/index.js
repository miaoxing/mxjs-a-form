import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import Form from '../Form';
import FormItem from '../FormItem';
import {MemoryRouter} from 'react-router';
import $ from 'miaoxing';
import {render} from '@testing-library/react'

// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

function createPromise() {
  let res, rej;

  const promise = new Promise((resolve, reject) => {
    res = (result) => {
      resolve(result);
      return promise;
    };
    rej = (result) => {
      reject(result);
      return promise;
    };
  })

  promise.resolve = res;
  promise.reject = rej;

  return promise;
}

describe('Form', () => {
  test('initialValues', async () => {
    const {container} = render(<MemoryRouter>
      <Form
        initialValues={{
          foo: 1,
          bar: 2
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
      }
    }));

    const {container} = render(<MemoryRouter>
      <Form
        valuesUrl="test"
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>)

    await promise;

    expect(container.querySelector('#foo').value).toBe('3');
    expect(container.querySelector('#bar').value).toBe('4');
  });

  test('submit', async () => {
    const promise = createPromise();

    $.post = jest.fn().mockImplementationOnce(() => promise.resolve({
      code: 1,
      message: 'success',
    }));

    const form = React.createRef();
    render(<MemoryRouter>
      <Form
        url="test"
        initialValues={{
          foo: 1,
          bar: 2
        }}
        formRef={form}
      >
        <FormItem name="foo"/>
        <FormItem name="bar"/>
      </Form>
    </MemoryRouter>)

    form.current.submit();

    await promise;

    expect($.post).toHaveBeenCalledTimes(1);
  });
});
