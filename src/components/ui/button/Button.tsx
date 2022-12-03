import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
}

function Button({
  children,
  onClick,
  type = 'button',
}: ButtonProps): JSX.Element {
  const { primary } = classes;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={primary} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
