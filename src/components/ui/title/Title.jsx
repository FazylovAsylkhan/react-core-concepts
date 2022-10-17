import React from "react";
import classes from "./Title.module.scss";

function Title(props) {
  const { children } = props;

  return (
    <h3 className={classes.title} {...props}>
      {children}
    </h3>
  );
}

export default Title;
