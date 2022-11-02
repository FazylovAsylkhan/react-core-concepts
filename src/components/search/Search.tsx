import React, { useState } from 'react';
import { Button, Title, Input } from '../ui';
import classes from './Search.module.scss';

function Search(): JSX.Element {
  const [value, setValue] = useState('');
  const { search, controller } = classes;

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
  };

  const changeHanle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form className={search}>
      <Title>Find your movie</Title>
      <div className={controller}>
        <Input
          value={value}
          id="search"
          className="search"
          placeholder="What do you want to watch?"
          onChange={changeHanle}
        />
        <Button type="submit" onClick={handleClick}>
          search
        </Button>
      </div>
    </form>
  );
}

export default Search;
