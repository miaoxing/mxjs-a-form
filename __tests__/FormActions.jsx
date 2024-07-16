import FormActions from '../FormActions';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('FormAction', () => {
  test('render', async () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <FormActions/>
        </MemoryRouter>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('custom offset', async () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <FormActions wrapperCol={{offset: 8}}/>
        </MemoryRouter>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
