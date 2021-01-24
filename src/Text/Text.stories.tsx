import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Heading 1 36px light'
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'Heading 2'
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'Heading 3'
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
  children: 'Heading 4'
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
  children: 'Heading 5'
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: 'h6',
  children: 'Heading 6'
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
  children: 'Body'
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Caption'
};
