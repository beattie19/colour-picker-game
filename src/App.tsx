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

const generateGameTilesWithColour = (numberOfTiles: number, rgbValue: number[]): number[][]  => {
  const rgbColours = [];
  for (let i=0; i < numberOfTiles; i++) {
    rgbColours.push(rgbValue);
  }
  return rgbColours;
}

function App() {
  const [tileColours, setTileColours] = useState<number[][]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
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

  const checkGameWon = (currentTileColour: number[]) => {
    if (currentTileColour === answer) {
      setGameWon(true);
      setAttemptMessage("CORRECT");
      return true;
    } else {
      setGameWon(false);
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
    if (gameWon) {
      setTileColours(generateGameTilesWithColour(currentDifficulty, answer));
    }
  }, [gameWon, answer, currentDifficulty]);

  if (!tileColours || !answer) { return null }

  return (
    <div>
      {answer &&
        <Header tileColour={answer}/>
      }
      <Nav startGame={startGame} currentDifficulty={currentDifficulty} attemptMessage={attemptMessage}/>
      {tileColours && answer &&
        <GameBody tileColours={tileColours} checkGameWon={checkGameWon} gameWon={gameWon}/>
      }
    </div>
  );
}

export default App;
