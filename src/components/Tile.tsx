import React from 'react';
import './styles.css';

const Tile: React.FC<{key: number}> = ({key}) => {

    return(
        <div key={key} className="tile">Tile</div>
    )
}

export default Tile;