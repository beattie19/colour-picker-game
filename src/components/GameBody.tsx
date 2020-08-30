import React from 'react';
import './styles.css';
import Tile from './Tile';

type GameBodyProps = {
    tileColours: number[][];
    checkGameWon: (clickTileColour: number[]) => boolean;
    gameWon: boolean; 
}
const GameBody: React.FC<GameBodyProps> = ({tileColours, checkGameWon, gameWon}) => {

    return(
        <>
            <div className="gamebody">
                <div className="tileSection">
                    {tileColours.map((colour) => {
                        return <Tile key={Math.random()} colour={colour} checkGameWon={checkGameWon} gameWon={gameWon}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default GameBody;