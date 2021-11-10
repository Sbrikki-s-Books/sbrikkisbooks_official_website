import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    let players = props.players;
    return(
        <>
            {players.forEach((player) => {
                return(
                    <div key={player.key}>
                        <PlayerGame name={player.name} />
                    </div>
                    
                );
            })}
        </>
    );
    
}

export default Play
