import React from 'react'
import PlayerGame from '../playerGame/playerGame'
import * as styles from './play.module.scss'

const Play = (props) => {
    return(
        <div className={styles.play}>
            {props.players.map((player) => {
                return(
                    <div key={player.key}>
                        <PlayerGame name={player.name} rounds={props.rounds} />
                    </div>
                    
                );
            })}
        </div>
    );
    
}

export default Play
