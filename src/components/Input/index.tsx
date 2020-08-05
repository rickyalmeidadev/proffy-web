import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string;
}

const Input: React.FC<IProps> = ({ label, name, ...rest }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input type="text" id={name} {...rest} />
  </div>
);

export default Input;
