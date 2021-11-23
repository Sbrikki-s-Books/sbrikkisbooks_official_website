import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    const isDirty = () => {
        return true
    };
    
    window.confirm(
        "Are you sure you want to leave?",
        isDirty() 
    )
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
