import React from "react";
import Helloworld from "../helloworld";
import Counter from "../counter";
import Search from "../search";
import Dropdown from "../dropdown";
import classes from "./App.module.scss";
import "../../scss/style.scss";

function App() {
  const initialItemsOfDropDown = [
    { isChecked: false, value: "Crime" },
    { isChecked: true, value: "Documentary" },
    { isChecked: false, value: "Horror" },
    { isChecked: true, value: "Comedy" },
  ];

  return (
    <div className={classes.app}>
      {Helloworld}
      <Counter />
      <Dropdown initialItems={initialItemsOfDropDown} />
      <Search />
    </div>
  );
}

export default App;
