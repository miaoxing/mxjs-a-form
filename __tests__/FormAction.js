import FormAction from '../FormAction';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';

describe('FormAction', () => {
  test('render', async () => {
    const {container} = render(<MemoryRouter><FormAction/></MemoryRouter>);

    expect(container).toMatchSnapshot();
  });

  test('custom offset', async () => {
    const {container} = render(<MemoryRouter><FormAction wrapperCol={{offset: 8}}/></MemoryRouter>);

    expect(container).toMatchSnapshot();
  });
});
