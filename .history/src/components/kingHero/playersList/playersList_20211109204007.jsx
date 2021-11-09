import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {

    return(
        <>
            {
                props.players.map((name) => {
                    return(
                        <div className={styles.list}>
                            <input type="input" value={name} placeholder="Name" />
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
