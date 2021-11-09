import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    
    return(
        <div className={styles.list}>
            <input type="input" value={name} placeholder="Name" />
        </div>
    );
}

export default PlayersList
