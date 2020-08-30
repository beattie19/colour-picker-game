import React from 'react';
import './styles.css';
import Tile from './Tile';
import { Tile as TileType } from '../App';

type GameBodyProps = {
    tileColours: TileType[];
    checkGameWon: (clickTile: TileType) => boolean;
}

const GameBody: React.FC<GameBodyProps> = ({tileColours, checkGameWon}) => {

    return(
        <>
            <div className="gamebody">
                <div className="tileSection">
                    {tileColours.map((colour) => {
                        return <Tile key={Math.random()} tile={colour} checkGameWon={checkGameWon}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default GameBody;