import {PropsWithChildren} from 'react';
import styled from '@emotion/styled'
import { variant, typography, color, ColorProps, TypographyProps } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

interface OwnProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption'
}

export type TextProps = PropsWithChildren<OwnProps & TypographyProps & ColorProps>;

export const Text = styled('span', {shouldForwardProp})(
  typography,
  color,
  variant({
    variants: {
      h1: {
        fontWeight: 0,
        fontSize: 6,
      },
      h2: {
        fontWeight: 0,
        fontSize: 5,
      },
      h3: {
        fontWeight: 0,
        fontSize: 4,
      },
      h4: {
        fontWeight: 1,
        fontSize: 3,
      },
      h5: {
        fontWeight: 1,
        fontSize: 2,
      },
      h6: {
        fontWeight: 2,
        fontSize: 1,
      },
      body: {
        fontWeight: 1,
        fontSize: 1,
      },
      caption: {
        fontWeight: 1,
        fontSize: 0,
      },
    }
  })
);

Text.defaultProps = {
  variant: 'body'
}
