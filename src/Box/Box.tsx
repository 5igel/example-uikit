import {PropsWithChildren} from 'react';
import styled from '@emotion/styled'
import { space, flex, border, BorderProps, FlexboxProps, SpaceProps } from 'styled-system'

export type BoxProps = PropsWithChildren<BorderProps & FlexboxProps & SpaceProps>;

export const Box = styled('div')`
  ${space}
  ${flex}
  ${border}
`
