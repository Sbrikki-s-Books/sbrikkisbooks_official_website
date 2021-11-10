import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    return(
        <>
            {props.players.map((player) => {
                return(
                    <div key={props.key}>
                        <PlayerGame name={player.name} />
                    </div>
                    
                );
            })}
        </>
    );
    
}

export default Play
