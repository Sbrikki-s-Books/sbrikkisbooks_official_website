import React from 'react'
import PlayerGame from '../playerGame/playerGame'

const Play = (props) => {
    {props.players.map((i,key,name) => {
        return(
            <PlayerGame name={name} />
        );
    })}
}

export default Play
