import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const state = {
  robots: [],
  searchField: '',
};

const App = () => {
  const [myState, setMyState] = useState(state);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMyState({ robots: users, searchField: '' }));
  }, [setMyState]);

  const onSearchChange = (event) => {
    setMyState((prevState) => ({
      ...prevState,
      searchField: event.target.value,
    }));
  };

  const filteredRobots = myState.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(myState.searchField.toLowerCase());
  });

  return !myState.robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
