import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    return(
        <>
            {props.players.map((player) => {
                return(
                    <PlayerGame name={player.name} />
                );
            })}
        </>
    );
    
}

export default Play
