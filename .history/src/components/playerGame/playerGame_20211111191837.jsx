import React from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
    let points;
    let array = [];


    for(i = 0; i < props.rounds; i++){

    }

    return (
        <div className={styles.playerGame}>
            <h3>{props.name}</h3>

        </div>
    )
}

export default PlayerGame
