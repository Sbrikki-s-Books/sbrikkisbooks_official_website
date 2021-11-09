import React from 'react'
import * as styles from './kingHero.module.scss'

function KingHero() {

    var players = [];
    var numPlayers = 5;

    return (
        <div className={styles.kingHero} id="/king">
            <h1>Mbare let's play King</h1>
            <div className={styles.players}>
                h2>How many players?</h2>
            </div>
        </div>
    )
}

export default KingHero
