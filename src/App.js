import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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

  if (myState.robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>{' '}
      </div>
    );
  }
};

export default App;
