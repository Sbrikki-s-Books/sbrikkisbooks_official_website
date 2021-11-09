import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;
    for(i = 0; i < props.numPlayers; i++){
        return(
            <div className={StyleSheet.list}>
                <input type="input" placeholder="Name" />
            </div>
        );
    }
}

export default PlayersList
