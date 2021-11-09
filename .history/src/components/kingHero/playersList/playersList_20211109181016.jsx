import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return(
        <>
        {players.map((index) => {
            <div className={styles.list}>
                <input type="input" placeholder="Name" />
            </div>
        })}
        </>
    );
    

    
}

export default PlayersList
