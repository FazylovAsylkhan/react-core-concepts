import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
}

function Input(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> &
    InputProps
): JSX.Element {
  const { type } = props;
  const { search } = classes;

  const inputClass = type === 'search' ? search : '';

  return <input className={inputClass} {...props} />;
}

export default Input;
