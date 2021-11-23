import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    return(
        <form>
            {props.players.map((player) => {
                return(
                    <div key={player.key}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        <button type="submit">Submit</button>
        </form>
    );
    
}

export default Play
