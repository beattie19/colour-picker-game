import React, { useState, useEffect } from 'react';
import GameBody from './components/GameBody';
import Header from './components/Header';
import Nav from './components/Nav';

const createRandomCssColourValue = (): number => Math.floor(Math.random() * 255);  

const generateRandomTileColour = (): number[] => {
  return Array.from(Array(3), (_, i) => createRandomCssColourValue())
}

const generateGameTiles = (numberOfTiles: number): number[][]  => {
  const rgbColours = [];
  for (let i=0; i < numberOfTiles; i++) {
    rgbColours.push(generateRandomTileColour());
  }
  return rgbColours;
}

function App() {
  const [tileColours, setTileColours] = useState<number[][]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const startGame = (tileCount = 3): void => {
    setGameStarted(true);
    const generatedGameTiles = generateGameTiles(tileCount); 
    setTileColours(generatedGameTiles);
    const randomIndex = Math.floor(Math.random() * tileCount);
    setAnswer(generatedGameTiles[randomIndex]);
  };

  useEffect(() => {
    if (!gameStarted) {
      startGame();
    }
  });

  if (!tileColours || !answer) { return null }

  return (
    <div>
      {answer &&
        <Header tileColour={answer}/>
      }
      <Nav startGame={startGame}/>
      {tileColours && answer &&
        <GameBody tileColours={tileColours}/>
      }
    </div>
  );
}

export default App;
