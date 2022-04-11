import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

const state = {
  robots: robots,
  searchField: '',
};

const App = () => {
  const [myState, setMyState] = useState(state);

  const onSearchChange = (event) => {
    setMyState((prevState) => ({
      ...prevState,
      searchField: event.target.value,
    }));
  };

  const filteredRobots = myState.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(myState.searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
