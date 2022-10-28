import React from 'react';
import { joinClasses } from '../../../helpers';
import type { IDropdownItem } from '../models';
import classes from './DropdownItem.module.scss';

interface DropdownItemProps {
  item: IDropdownItem;
  handleClick: (value: string) => void;
}

function DropdownItem({ item, handleClick }: DropdownItemProps): JSX.Element {
  const { isChecked, value } = item;
  const { option, checked } = classes;

  const className = isChecked ? joinClasses(option, checked) : option;

  return (
    <li>
      <button
        className={className}
        type="button"
        onClick={() => handleClick(value)}>
        {value}
      </button>
    </li>
  );
}

export default DropdownItem;
