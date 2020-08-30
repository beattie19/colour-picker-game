import React from 'react';

type NavProps = {
    startGame: (tileCount: number) => void;
}

const Nav: React.FC<NavProps> = ({ startGame }) => {

    return(
        <div className="nav">
            <div className="nav-section">
                <button onClick={() => startGame(3)} className="new-game">NEW GAME</button>
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