import React from 'react';


import { Wrapper, ButtonShadow, ButtonComponents } from './Button.styles';

interface IProps {
  children: React.ReactNode;
  width?: number | string;
  style?: object;
  type?: 'button' | 'submit';
  height?: number;
}

const Button = ({ children, type='button', width = '100%', style = {}, height = 40 }: IProps) => (
  <Wrapper className="button" width={width} height={height}>
    <ButtonShadow style={style} />
    <ButtonComponents type={type} style={style}>{children}</ButtonComponents>
  </Wrapper>
);

export default Button;