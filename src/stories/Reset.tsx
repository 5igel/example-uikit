import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { FC } from 'react'

export const Reset:FC = ({children}) => (
  <><Global styles={css`
    ${emotionReset}

    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  `} />{children}</>
);
