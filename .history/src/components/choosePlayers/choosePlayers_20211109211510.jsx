import React from 'react'
import PlayersList from '../../atoms/playersList/playersList'
import * as styles from './choosePlayers.module.scss'

function ChoosePlayers(props) {
    return (
        <>
            <div className={styles.players}>
                <h2>How many players?</h2>
                <div className={styles.countPlayers}>
                    <button onClick={props.decreasePlayers}>
                        <p>-</p>
                    </button>
                    <p>{props.numPlayers}</p>
                    <button onClick={props.increasePlayers}>
                        <p>+</p>
                    </button>
                </div>

            </div>
            
            <PlayersList numPlayers={props.numPlayers} onClick={props.getPlayers}/>
        </>
    )
}

export default ChoosePlayers
