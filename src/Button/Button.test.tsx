import React from 'react';
import { render } from '@testing-library/react';

import {Button} from './Button';

test('renders button', () => {
  const { container, getByText } = render(<Button label="snapshot" />)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders button with html attributes', () => {
  const { container, getByText } = render(<Button label="snapshot" type="submit" data-custom="custom" />)
  expect(container.firstChild).toMatchSnapshot()
});
