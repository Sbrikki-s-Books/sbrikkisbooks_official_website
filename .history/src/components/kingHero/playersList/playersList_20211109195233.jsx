import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    return(
        <>
            {
                props.players.map((player) => {
                    return(
                        <div className={styles.list}>
                            <input type="input" value={player} placeholder="Name" />
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
