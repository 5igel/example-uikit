import React from 'react';
import {ThemeProvider} from '../src/stories/ThemeProvider';
export const decorators = [(Story) => <ThemeProvider><Story/></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
