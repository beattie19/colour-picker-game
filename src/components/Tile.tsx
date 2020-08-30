import React, { useState } from 'react';
import './styles.css';

type TileProps = {
    colour: number[];
    checkGameWon: (clickedColour: number[]) => boolean;
    gameWon: boolean;
}

const Tile: React.FC<TileProps> = ({colour, checkGameWon, gameWon}) => {
    const [hidden, setHidden] = useState(false);
    const handleClick = () => {
        checkGameWon(colour);
        setHidden(!gameWon);
    }

    const styles =  hidden ? "tile hiddenTile" : "tile";

    return(
        <div className={styles} style={{backgroundColor: `rgb(${colour.toString()})`}} onClick={handleClick}/>
    )
}

export default Tile;