import React from 'react';
import './styles.css';

type HeaderProps = {
    titleColour: number[];
}

const Header: React.FC<HeaderProps> = ({titleColour}) => {

    const formattedColours = `${titleColour[0]}, ${titleColour[1]}, ${titleColour[2]}`
    return(
        <div className="header">
            <h3>THE GREAT</h3>
            <h1>RGB({formattedColours})</h1>
            <h3>COLOUR GAME</h3>  
        </div>
    )
}

export default Header;