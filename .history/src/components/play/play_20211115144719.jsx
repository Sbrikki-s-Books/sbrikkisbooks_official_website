import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    return(
        <>
            {props.players.map((player) => {
                return(
                    <div key={player.key}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </>
    );
    
}

export default Play
