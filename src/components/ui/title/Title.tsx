import React from 'react';
import classes from './Title.module.scss';

function Title(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
): JSX.Element {
  const { children } = props;
  const { title } = classes;

  return (
    <h3 className={title} {...props}>
      {children}
    </h3>
  );
}

export default Title;
