import React from 'react';
import DropdownItem from './dropdownItem';
import { joinClasses } from '../../helpers';
import classes from './Dropdown.module.scss';
import type { IDropdownItem } from './models';

interface DropdownState {
  isActive: boolean;
  items: IDropdownItem[];
}

interface DropdownProps {
  initialItems: IDropdownItem[];
}

class Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isActive: false,
      items: props.initialItems.slice(),
    };
  }

  toggle(): void {
    this.setState((previousState) => ({
      isActive: !previousState.isActive,
    }));
  }

  check(currentValue: string): void {
    const { items } = this.state;
    const updatedItems = items.map((item) => {
      const { value, isChecked } = item;

      if (value === currentValue) {
        return {
          value,
          isChecked: !isChecked,
        };
      }

      return item;
    });

    this.setState({
      items: updatedItems,
    });
  }

  override render(): JSX.Element {
    const { isActive, items } = this.state;
    const { selector, active, dropdown, list } = classes;

    const selectorClassName = isActive
      ? joinClasses(selector, active)
      : selector;

    return (
      <div className={dropdown}>
        <button
          type="button"
          className={selectorClassName}
          onClick={() => this.toggle()}>
          Select Genre
        </button>
        {isActive && (
          <ul className={list}>
            {items.map((item) => (
              <DropdownItem
                key={item.value}
                item={item}
                handleClick={() => this.check(item.value)}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
