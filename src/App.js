import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SwCharacters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then( res => {
      console.log(res.data)
      setCharacters(res.data);
    })
    .catch( err => {
      console.error(err);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { characters && <SwCharacters character={characters}/>}
    </div>
  );
}

export default App;
