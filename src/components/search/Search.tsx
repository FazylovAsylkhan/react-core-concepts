import React, { useState } from 'react';
import { Button, Title, Input } from '../ui';
import classes from './Search.module.scss';

function Search(): JSX.Element {
  const [value, setValue] = useState('');
  const { search, controller } = classes;

  return (
    <form className={search}>
      <Title>Find your movie</Title>
      <div className={controller}>
        <Input
          value={value}
          id="search"
          type="search"
          placeholder="What do you want to watch?"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button>search</Button>
      </div>
    </form>
  );
}

export default Search;
