import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  const { children } = props;

  return (
    <button className={classes.primary} {...props}>
      {children}
    </button>
  );
}

export default Button;
