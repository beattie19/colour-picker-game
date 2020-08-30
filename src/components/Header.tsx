import React from 'react';
import './styles.css';
import { Tile } from '../App';

type HeaderProps = {
    tile: Tile;
}

const Header: React.FC<HeaderProps> = ({tile: { colour }}) => {

    const formattedColours = `${colour[0]}, ${colour[1]}, ${colour[2]}`
    return(
        <div className="header">
            <h3>THE GREAT</h3>
            <h1>RGB({formattedColours})</h1>
            <h3>COLOUR GAME</h3>  
        </div>
    )
}

export default Header;