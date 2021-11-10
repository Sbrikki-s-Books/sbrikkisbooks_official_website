import React from 'react'
import PlayerGame from '../playerGame/playerGame'

function Play(props) {
    return (
        <div>
            {props.players.map((name) => {
                return(
                    <PlayerGame name={name} />
                );
            })}
        </div>
    )
}

export default Play
