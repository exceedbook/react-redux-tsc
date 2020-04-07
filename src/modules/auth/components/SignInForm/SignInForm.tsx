import React from 'react';


import { Wrapper  } from './SignInForm.styles'


interface IProps {
  children?: React.ReactNode;
  onSubmit?: (value: any) => void;
}
const SignInForm: React.FC<IProps> = ({ children, onSubmit }) => (
  <Wrapper onSubmit={onSubmit}>
  
    {children}
  </Wrapper>
 
);

export default SignInForm;