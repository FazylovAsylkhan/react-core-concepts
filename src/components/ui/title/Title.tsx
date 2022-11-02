import React from 'react';
import classes from './Title.module.scss';

function Title({
  children,
}: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element {
  const { title } = classes;

  return <h3 className={title}>{children}</h3>;
}

export default Title;
