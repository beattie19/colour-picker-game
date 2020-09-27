import React from 'react';
import './styles.css';
import { Tile as TileType} from '../App';

type TileProps = {
    tile: TileType;
    checkGameWon: (clickedColour: TileType) => void;
}

const Tile: React.FC<TileProps> = ({ tile, checkGameWon }) => {

    const handleClick = (): void => checkGameWon(tile);

    const styles = tile.hidden ? "tile hiddenTile" : "tile";

    return(
        <div className={styles} style={{backgroundColor: `rgb(${tile.colour.toString()})`}} onClick={handleClick}/>
    )
}

export default Tile;