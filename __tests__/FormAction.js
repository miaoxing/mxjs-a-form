import FormAction from '../FormAction';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('FormAction', () => {
  test('render', async () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <FormAction/>
        </MemoryRouter>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('custom offset', async () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <FormAction wrapperCol={{offset: 8}}/>
        </MemoryRouter>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
