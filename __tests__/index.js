import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import AForm from '../AForm';
import AFormItem from '../AFormItem';
import {MemoryRouter} from 'react-router';
import $ from 'miaoxing';
import {render} from '@testing-library/react'

jest.mock('miaoxing');

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

describe('AForm', () => {
  test('initialValues', async () => {
    const {container} = render(<MemoryRouter>
      <AForm
        initialValues={{
          foo: 1,
          bar: 2
        }}
      >
        <AFormItem name="foo"/>
        <AFormItem name="bar"/>
      </AForm>
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
      <AForm
        valuesUrl="test"
      >
        <AFormItem name="foo"/>
        <AFormItem name="bar"/>
      </AForm>
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
      <AForm
        url="test"
        initialValues={{
          foo: 1,
          bar: 2
        }}
        formRef={form}
      >
        <AFormItem name="foo"/>
        <AFormItem name="bar"/>
      </AForm>
    </MemoryRouter>)

    form.current.submit();

    await promise;

    expect($.post).toHaveBeenCalledTimes(1);
  });
});
