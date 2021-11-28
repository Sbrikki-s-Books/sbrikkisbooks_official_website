import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    return(
        <form>
            {props.players.map((player) => {
                return(
                    <div key={player.key} id={player.key}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </form>
    );
    
}

export default Play
