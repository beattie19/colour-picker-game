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
                <div className="tileSection">
                    {tileColours.map((colour) => {
                        return <Tile key={Math.random()} colour={colour} />
                    })}
                </div>
            </div>
        </>
    )
}

export default GameBody;