import React from "react";
import classes from "./Input.module.scss";

function Input(props) {
  const { type } = props;
  const relevantClassName = type === "search" ? classes.search : classes.button;

  return <input className={relevantClassName} {...props} />;
}

export default Input;
