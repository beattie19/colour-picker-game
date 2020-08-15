import React from 'react';

const Nav: React.FC = () => {

    return(
        <div className="nav">
            <div className="nav-section">
                <div className="new-game">NEW GAME</div>
            </div>
            <div className="nav-section">
                <div className="easy">EASY</div>
                <span className="spacer"> | </span>
                <div className="hard">HARD</div>
            </div>
        </div>
    )
}

export default Nav;