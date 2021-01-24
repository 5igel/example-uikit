import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

export const WithTheme: FC = ({children}) =>
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
