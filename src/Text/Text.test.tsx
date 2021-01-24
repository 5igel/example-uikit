import React from 'react';
import { render } from '@testing-library/react';

import {Text} from './Text';

test('renders text h1', () => {
  const { container } = render(<Text variant="h1">Heading 1</Text>)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders text h2', () => {
  const { container } = render(<Text variant="h2">Heading 2</Text>)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders text h3', () => {
  const { container } = render(<Text variant="h3">Heading 3</Text>)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders text h4', () => {
  const { container } = render(<Text variant="h4">Heading 4</Text>)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders text h5', () => {
  const { container } = render(<Text variant="h5">Heading 5</Text>)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders text h6', () => {
  const { container } = render(<Text variant="h6">Heading 6</Text>)
  expect(container.firstChild).toMatchSnapshot()
});
