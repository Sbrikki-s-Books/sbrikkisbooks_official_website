import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    players.map((index) => {
        return(
                <div className={styles.list}>
                    <input type="input" placeholder="Name" />
                </div>
            );
    });

    
}

export default PlayersList
