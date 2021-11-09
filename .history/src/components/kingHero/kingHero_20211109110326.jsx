import React, { useState } from 'react'
import * as styles from './kingHero.module.scss'

function KingHero() {

    const [numPlayers, setNumPlayers] = useState(5);

    return (
        <div className={styles.kingHero} id="/king">
            <h1>Mbare let's play King</h1>

            <div className={styles.players}>
                <h2>How many players?</h2>

                <div className={styles.countPlayers}>
                    <button onClick={setNumPlayers(numPlayers-1)}>
                        <p>-</p>
                    </button>
                    <p>{numPlayers}</p>
                    <button onClick={setNumPlayers(numPlayers+1)}>
                        <p>+</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KingHero
