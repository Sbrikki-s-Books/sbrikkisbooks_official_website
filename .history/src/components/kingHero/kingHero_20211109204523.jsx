import React, { useState } from 'react'
import * as styles from './kingHero.module.scss'
import PlayersList from './playersList/playersList';

const KingHero = () => {

    const [numPlayers, setNumPlayers] = useState(0);
    let players = [];

    const decreasePlayers = () => {
        if(numPlayers > 0){
            setNumPlayers(numPlayers-1);
            players.pop();
        }
        if(numPlayers <= 0){
            alert("Mbare ocaca menu un cristiano nun si po fari");
        }
    }

    const increasePlayers = () => {
        if(numPlayers < 10){
            setNumPlayers(numPlayers+1)
            players.push(
                {
                    id:numPlayers,
                    player: '',
                }
            );
        }
        console.log(players)
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
            
            {
                players.map((id, player) => {
                    return(
                        <PlayersList player={player} />
                    );
                })    
            }

            { 
                numPlayers > 0 ?
                    <button>
                        <h3>START!</h3>
                    </button>
                    :
                    null
            }
            
        </div>
    )
}

export default KingHero
