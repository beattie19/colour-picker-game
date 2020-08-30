import React from 'react';

type NavProps = {
    startGame: (tileCount: number) => void;
    currentDifficulty: number;
    attemptMessage: string;
}

const Nav: React.FC<NavProps> = ({ startGame, currentDifficulty, attemptMessage }) => {

    const newGameText = attemptMessage === "CORRECT" ? "PLAY AGAIN?" : "NEW GAME" 
    
    return(
        <div className="nav">
            <div className="nav-section">
                <button onClick={() => startGame(currentDifficulty)} className="new-game">{newGameText}</button>
            </div>
            <div className="nav-section">
                <div>{attemptMessage}</div>
            </div>
            <div className="nav-section">
                <button onClick={() => startGame(3)} className="easy">EASY</button>
                <button onClick={() => startGame(6)} className="hard">HARD</button>
                <button onClick={() => startGame(9)} className="hard">EVEN HARDER</button>
            </div>
        </div>
    )
}

export default Nav;