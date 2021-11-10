import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    console.log(props.players)
    let players = props.players;
    return(
        <>
            {players.map((player) => {
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
