import React from 'react';
import Counter from '../counter';
import Search from '../search';
import Dropdown from '../dropdown';
import classes from './App.module.scss';
import '../../scss/style.module.scss';

function App(): JSX.Element {
  const { app } = classes;
  const initialItemsOfDropDown = [
    { isChecked: false, value: 'Crime' },
    { isChecked: true, value: 'Documentary' },
    { isChecked: false, value: 'Horror' },
    { isChecked: true, value: 'Comedy' },
  ];

  return (
    <div className={app}>
      <Counter />
      <Dropdown initialItems={initialItemsOfDropDown} />
      <Search />
    </div>
  );
}

export default App;
