import React, { FC } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

export const ThemeProvider: FC = ({children}) =>
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
