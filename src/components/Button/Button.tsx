import React, { ReactNode, Ref } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyleProps } from 'types/emotion';

export interface ButtonProps {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

const baseStyles = ({ theme }: ButtonProps & StyleProps) => css`
  label: button;

  color: ${theme.colors.white};
  border: 0;
  background: ${theme.colors.black};
`;

const ButtonEl = styled('button')(baseStyles);

function Button(props: ButtonProps, ref?: ButtonProps['ref']) {
  return <ButtonEl ref={ref} {...props} />;
}

export default React.forwardRef(Button);
