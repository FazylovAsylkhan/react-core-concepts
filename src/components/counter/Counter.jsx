import React from "react";
import { Button, Title } from "../ui";
import classes from "./Counter.module.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  decrement() {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  }

  render() {
    return (
      <div className={classes.counter}>
        <Title>Count {this.state.count}</Title>
        <div className={classes.controller}>
          <Button onClick={this.increment}>Increment</Button>
          <Button onClick={this.decrement}>Decrement</Button>
        </div>
      </div>
    );
  }
}

export default Counter;
