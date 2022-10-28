import React from 'react';
import classes from './Button.module.scss';

function Button(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element {
  const { children } = props;
  const { primary } = classes;

  return (
    <button type="button" className={primary} {...props}>
      {children}
    </button>
  );
}

export default Button;
