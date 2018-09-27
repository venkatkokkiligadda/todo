import React from "react";
import './Main.css';

import AddTask from './AddTask/AddTask';
import List from './List/List';

export default function Main() {
  return (
    <div id="Main__container">
      <AddTask />
      <List />
    </div>
  )
}