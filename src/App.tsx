import React, { useState, useEffect } from 'react';
import GameBody from './components/GameBody';
import Header from './components/Header';
import Nav from './components/Nav';

const createRandomCssColourValue = (): number => Math.floor(Math.random() * 255);  

type RGB = [number, number, number];

export type Tile = {
  colour: RGB;
  hidden: boolean;
}

const generateRandomTileColour = (): Tile => {
  // const arr: [number,number, number] =  Array.from(Array(3), (_, i) => createRandomCssColourValue());
  const arr: [number, number, number] = [createRandomCssColourValue(), createRandomCssColourValue(), createRandomCssColourValue()];

  return {hidden: false, colour: arr} ; 
}

const generateGameTiles = (numberOfTiles: number): Tile[]  => {
  const rgbColours = [];
  for (let i=0; i < numberOfTiles; i++) {
    rgbColours.push(generateRandomTileColour());
  }
  return rgbColours;
}

const generateGameTilesWithColour = (numberOfTiles: number, rgbValue: RGB): Tile[]  => {
  const rgbColours: Tile[] = [];
  for (let i=0; i < numberOfTiles; i++) {
    rgbColours.push({colour: rgbValue, hidden: false});
  }
  return rgbColours;
}

function App() {
  const [tileColours, setTileColours] = useState<Tile[]>([]);
  const [answer, setAnswer] = useState<Tile|null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentDifficulty, setCurrentDifficulty] = useState(3);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [attemptMessage, setAttemptMessage] = useState('');

  const startGame = (currentDifficulty: number): void => {
    setCurrentDifficulty(currentDifficulty);
    setAttemptMessage('');
    setGameStarted(true);
    const generatedGameTiles = generateGameTiles(currentDifficulty); 
    setTileColours(generatedGameTiles);
    const randomIndex = Math.floor(Math.random() * currentDifficulty);
    setAnswer(generatedGameTiles[randomIndex]);
    setGameWon(false);
  };

  const checkGameWon = (clickedTile: Tile) => {
    if (clickedTile === answer) {
      setGameWon(true);
      setAttemptMessage("CORRECT");
      return true;
    } else {
      setGameWon(false);
      const updatedTiles = tileColours.map((tile) => {
        if (tile === clickedTile) {
          tile.hidden = true;
        } 
        return tile;
      });
      setTileColours(updatedTiles);
      setAttemptMessage("INCORRECT! TRY AGAIN")
      return false;
    }
  };

  useEffect(() => {
    if (!gameStarted) {
      startGame(currentDifficulty);
    }
  });

  useEffect(() => {
    if (gameWon && answer) {
      setTileColours(generateGameTilesWithColour(currentDifficulty, answer.colour));
    }
  }, [gameWon, answer, currentDifficulty]);

  if (!tileColours || !answer) { return null }

  return (
    <div>
      {answer &&
        <Header tile={answer}/>
      }
      <Nav startGame={startGame} currentDifficulty={currentDifficulty} attemptMessage={attemptMessage}/>
      {tileColours && answer &&
        <GameBody tileColours={tileColours} checkGameWon={checkGameWon}/>
      }
    </div>
  );
}

export default App;
