import React from 'react';
import classes from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
}

function Input({
  className,
  onChange,
  value,
  placeholder,
  id,
}: InputProps): JSX.Element {
  const { search } = classes;

  const inputClass = className === 'search' ? search : '';

  return (
    <input
      className={inputClass}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default Input;
