import React from "react";
import joinClasses from "../../../helpers";
import classes from "./DropdownItem.module.scss";

function DropdownItem({ item, handleClick }) {
  const { isChecked, value } = item;

  const className = isChecked
    ? joinClasses(classes.option, classes.checked)
    : classes.option;

  return (
    <li className={className} onClick={() => handleClick(value)}>
      {value}
    </li>
  );
}

export default DropdownItem;
