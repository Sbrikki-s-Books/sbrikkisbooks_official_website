import React from 'react'
import * as styles from './playerGame.module.scss'

function PlayerGame(props) {
    return (
        <div className={styles.playerGame}>
            <h3>{props.name}</h3>

        </div>
    )
}

export default PlayerGame
