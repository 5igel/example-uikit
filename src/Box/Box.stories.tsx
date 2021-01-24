import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, BoxProps } from './Box'

export default {
  title: 'Example/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Simple box',
  py:3,
  m: 1,
  border: 1,
  borderColor: 'danger',
  borderStyle: 'solid'
};
