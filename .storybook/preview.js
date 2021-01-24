import React from 'react';
import {WithTheme} from '../src/stories/WithTheme';
export const decorators = [(Story) => <WithTheme><Story/></WithTheme>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
