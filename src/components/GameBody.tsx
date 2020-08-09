import React from 'react';
import './styles.css';
import Tile from './Tile';

const GameBody: React.FC = () => {

    const colours = [1,2,3,4,5,6];
    return(
        <>
            <div className="gamebody">
                {colours.map((colour) => {
                return  <Tile key={colour}>Colour</Tile>
                })}
            </div>
        </>
    )
}

export default GameBody;