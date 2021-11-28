import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {

    return(
        <form>
            {props.players.map((player,i) => {
                return(
                    <div key={player.key} id={i}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </form>
    );
    
}

export default Play
