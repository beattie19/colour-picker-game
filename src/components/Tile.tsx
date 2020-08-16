import React from 'react';
import './styles.css';

const Tile: React.FC<{colour: number[]}> = ({colour}) => {
    return(
        <div className="tile" style={{backgroundColor: `rgb(${colour.toString()})`}}/>
    )
}

export default Tile;