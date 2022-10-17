import React, { useState } from "react";
import { Button, Title, Input } from "../ui";
import classes from "./Search.module.scss";

function Search() {
  const [value, setValue] = useState("");

  return (
    <form className={classes.search}>
      <label htmlFor="search" className={classes.label}>
        <Title>Find your movie</Title>
        <Input
          value={value}
          id="search"
          type="search"
          placeholder="What do you want to watch?"
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <Button>search</Button>
    </form>
  );
}

export default Search;
