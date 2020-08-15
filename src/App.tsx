import React from 'react';
import GameBody from './components/GameBody';
import Header from './components/Header';
import Nav from './components/Nav';

const createRandomCssColourValue = () => Math.floor(Math.random() * 255);  

const generateRandomTileColour = () => {
  return Array.from(Array(3), (_, i) => createRandomCssColourValue())
}

const generateGameTiles = (numberOfTiles = 3)  => {
  const rgbColours = [];
  for (let i=0; i < numberOfTiles; i++) {
    rgbColours.push(generateRandomTileColour());
  }
  return rgbColours;
}

function App() {

  const tileColours = generateGameTiles(9);
  const randomIndex = Math.floor(Math.random() * 6);
  const answer = tileColours[randomIndex];

  return (
    <div>
      <Header titleColour={answer}/>
      <Nav/>
      <GameBody tileColours={tileColours}/>
    </div>
  );
}

export default App;
