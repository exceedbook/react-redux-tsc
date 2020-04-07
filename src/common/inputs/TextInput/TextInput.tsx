import React from 'react';

import { Input } from './TextInput.styles';

interface IProps {
  type?: 'text' | 'password' | 'email';
  label?: string;
  value?: string;
  name?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const TextInput: React.FC<IProps> = React.forwardRef(({ type = 'text', name, value, label}, ref) => (
  <>
    {label && <label>{label}</label>}
    <Input ref={ref} name={name} type={type} value={value} />
  </>
));


export default TextInput;