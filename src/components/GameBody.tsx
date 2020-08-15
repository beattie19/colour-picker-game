import React from 'react';
import './styles.css';
import Tile from './Tile';

type GameBodyProps = {
    tileColours: number[][];
}
const GameBody: React.FC<GameBodyProps> = ({tileColours}) => {

    return(
        <>
            <div className="gamebody">
                {tileColours.map((colour) => {
                return  <Tile key={Math.random()}>Colour</Tile>
                })}
            </div>
        </>
    )
}

export default GameBody;