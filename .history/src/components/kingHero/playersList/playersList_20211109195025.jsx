import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let playersCount = [];

    for(i=0; i<props.numPlayers; i++){
        playersCount.push(i);
    }

    return(
        <>
            {
                playersCount.map((index) => {
                    return(
                        <div className={styles.list}>
                            <input type="input" value={props.players[index]} placeholder="Name" />
                        </div>
                    )
                })
            }

            { 
                props.numPlayers > 0 ?
                    <button>
                        <h3>START!</h3>
                    </button>
                    :
                    null
            }
        </>
    );
    

    
}

export default PlayersList
