import React from 'react';
import { Button, Title } from '../ui';
import classes from './Counter.module.scss';

interface CounterState {
  count: number;
}

class Counter extends React.Component<Record<string, never>, CounterState> {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.state = { count: 0 };
  }

  increment(): void {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  decrement(): void {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  }

  override render(): JSX.Element {
    const { counter, controller } = classes;
    const { count } = this.state;

    return (
      <div className={counter}>
        <Title>Count {count}</Title>
        <div className={controller}>
          <Button onClick={() => this.increment()}>Increment</Button>
          <Button onClick={() => this.decrement()}>Decrement</Button>
        </div>
      </div>
    );
  }
}

export default Counter;
