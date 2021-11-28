import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {

    return(
        <form>
            {props.players.map((player,i) => {
                return(
                    <div key={player.key} id={'table'+i}>
                        <PlayerGame name={player.name} rounds={props.rounds} currentRound={props.currentRound} />
                    </div>
                    
                );
            })}
        </form>
    );
    
}

export default Play
