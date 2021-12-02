import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [];

    for(i=0; i<props.numPlayers; i++){
        players.push(i);
    }

    return(
        <>
            {
                players.map((index) => {
                    return(
                        <div className={styles.list}>
                            <input type="input" placeholder="Name" />
                        </div>
                    )
                })
            }
            <button>
                <h3>START!</h3>
            </button>
        </>
    );
    

    
}

export default PlayersList