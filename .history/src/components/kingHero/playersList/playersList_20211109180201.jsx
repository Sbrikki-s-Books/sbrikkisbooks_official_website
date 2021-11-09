import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;
    let players = [];
    for(i = 0; i < props.numPlayers; i++){
        players.push(i);
    }

    players.forEach((index) => {
        return(
            <div className={styles.list}>
                <input type="input" placeholder="Name" />
            </div>
        );
    });
}

export default PlayersList
