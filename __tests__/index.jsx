import Divider from '..';
import {render} from '@testing-library/react';

describe('Divider', () => {
  test('basic', () => {
    const {container} = render(<Divider/>);
    expect(container).toMatchSnapshot();
  });
});
