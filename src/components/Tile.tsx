import React, { useState } from 'react';
import './styles.css';
import { Tile as TileType} from '../App';

type TileProps = {
    tile: TileType;
    checkGameWon: (clickedColour: TileType) => boolean;
}

const Tile: React.FC<TileProps> = ({tile, checkGameWon}) => {

    const handleClick = () => {
        checkGameWon(tile);
    }

    const styles = tile.hidden ? "tile hiddenTile" : "tile";


    return(
        <div className={styles} style={{backgroundColor: `rgb(${tile.colour.toString()})`}} onClick={handleClick}/>
    )
}

export default Tile;