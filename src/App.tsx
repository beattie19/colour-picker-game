import React, { useState, useEffect ,useCallback } from 'react';
import GameBody from './components/GameBody';
import Header from './components/Header';
import Nav from './components/Nav';

const createRandomCssColourValue = (): number => Math.floor(Math.random() * 255);  

const generateRandomTileColour = (): number[] => {
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
  const [tileColours, setTileColours] = useState<number[][]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const startGame = (): void => {
    setTileColours(generateGameTiles(6));
    const randomIndex = Math.floor(Math.random() * 6);
    console.log('tiles', tileColours);
    console.log('answer', tileColours[randomIndex]);

    setAnswer(tileColours[randomIndex]);
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) {
      startGame();
    }
  });

  // if (!tileColours || !answer) { return null }

  return (
    <div>
      {answer &&
        <Header tileColour={answer}/>
      }
      <Nav/>
      {tileColours && answer &&
        <GameBody tileColours={tileColours}/>
      }
    </div>
  );
}

export default App;
