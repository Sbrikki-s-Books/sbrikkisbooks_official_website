import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [];

    for(i=0; i<props.numPlayers; i++){
        players.push({
            key: i
        });
    }

    return(
        <>
            {
                players.map((key) => {
                    return(
                        <div className={styles.list}>
                            <input type="input" id={"player"+key} placeholder="Name" />
                        </div>
                    )
                })
            }

            { 
                props.numPlayers > 0 ?
                    <button onClick={props.onClick}>
                        <h3>START!</h3>
                    </button>
                    :
                    null
            }
        </>
    );
    

    
}

export default PlayersList
