import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import styled from '@emotion/styled'
import { variant, padding, typography, border } from 'styled-system'


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
  onClick?: MouseEventHandler;
  variant?: 'primary' | 'secondary' | 'danger'
}

const BaseButton: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

export const Button = styled(BaseButton)(
  {
    appearance: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  padding,
  typography,
  border,
  variant({
    variants: {
      primary: {
        color: 'background',
        bg: 'primary',
      },
      secondary: {
        color: 'foreground',
        bg: 'secondary',
      },
      danger: {
        color: 'background',
        bg: 'danger',
      },
    }
  })
)

Button.defaultProps = {
  py: 2,
  px: 4,
  border: 0,
  borderRadius: 1,
  fontSize: 0,
  fontWeight: 2,
}
