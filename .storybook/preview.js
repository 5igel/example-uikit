import React from 'react';
import {WithTheme} from '../src/stories/WithTheme';
import {Reset} from '../src/stories/Reset';
export const decorators = [(Story) => <WithTheme><Reset><Story/></Reset></WithTheme>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
