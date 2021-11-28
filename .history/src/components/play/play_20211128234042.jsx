import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {

    return(
        <form id="table" style={"position: absolute"}>
            {props.players.map((player,i) => {
                return(
                    <div key={player.key} id={'table'+i}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </form>
    );
    
}

export default Play
