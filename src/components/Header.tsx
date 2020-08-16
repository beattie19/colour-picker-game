import React from 'react';
import './styles.css';

type HeaderProps = {
    tileColour: number[];
}

const Header: React.FC<HeaderProps> = ({tileColour}) => {

    const formattedColours = `${tileColour[0]}, ${tileColour[1]}, ${tileColour[2]}`
    return(
        <div className="header">
            <h3>THE GREAT</h3>
            <h1>RGB({formattedColours})</h1>
            <h3>COLOUR GAME</h3>  
        </div>
    )
}

export default Header;