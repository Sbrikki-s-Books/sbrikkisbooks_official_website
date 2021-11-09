import React, { useEffect } from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;
    let players = [];
    
    useEffect(() => {
        for(i = 0; i < props.numPlayers; i++){
            players.push(i);
        }
    }, [props.numPlayers])

    
    console.log(players);

    players.map((index) => {
        return(
            <div className={styles.list}>
                <input type="input" placeholder="Name" />
            </div>
        );
    });
}

export default PlayersList
