import React, { useState } from 'react'
import * as styles from './kingHero.module.scss'
import PlayersList from './playersList/playersList';

const KingHero = () => {

    const [numPlayers, setNumPlayers] = useState(5);
    const [start, setStart] = useState(false);

    const decreasePlayers = () => {
        if(numPlayers > 0){
            setNumPlayers(numPlayers-1)
        }
        if(numPlayers <= 0){
            alert("Mbare ocaca menu un cristiano non si po fari");
        }
    }

    const increasePlayers = () => {
        if(numPlayers < 10){
            setNumPlayers(numPlayers+1)
        }
        if(numPlayers >= 10){
            alert("Mbare quantu spacchiu siti");
        }
    }

    return (
        <div className={styles.kingHero} id="/king">
            <h1>Let's play King</h1>

            <div className={styles.players}>
                <h2>How many players?</h2>
                <div className={styles.countPlayers}>
                    <button onClick={decreasePlayers}>
                        <p>-</p>
                    </button>
                    <p>{numPlayers}</p>
                    <button onClick={increasePlayers}>
                        <p>+</p>
                    </button>
                </div>

            </div>
            <button onClick={() => setStart(true)}>
                <h3>START!</h3>
            </button>
            {start ? <PlayersList numPlayers={numPlayers} /> : null }
        </div>
    )
}

export default KingHero
