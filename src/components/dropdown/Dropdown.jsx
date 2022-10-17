import React from "react";
import DropdownItem from "./dropdownItem";
import classes from "./Dropdown.module.scss";
import joinClasses from "../../helpers";

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      items: props.initialItems.slice(),
    };
    this.toggle = this.toggle.bind(this);
    this.check = this.check.bind(this);
  }

  toggle() {
    this.setState((previousState) => ({
      isActive: !previousState.isActive,
    }));
  }

  check(value) {
    const updatedItems = this.state.items.map((item) => {
      if (item.value === value) item.isChecked = !item.isChecked;

      return item;
    });

    this.setState({
      items: updatedItems,
    });
  }

  render() {
    const { isActive, items } = this.state;

    const selectorClassName = isActive
      ? joinClasses(classes.selector, classes.active)
      : classes.selector;

    return (
      <div className={classes.dropdown}>
        <div className={selectorClassName} onClick={this.toggle}>
          Select Genre
        </div>
        {isActive && (
          <ul className={classes.list}>
            {items.map((item) => (
              <DropdownItem
                key={item.value}
                item={item}
                handleClick={this.check}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
