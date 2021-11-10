import React from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [];

    useEffect(() => {
        for(i=0; i<props.numPlayers; i++){
            players.push(i);
        }    
    }, [props.numPlayers]);

    return(
        <>
            {
                players.map((index) => {
                    return(
                        <div className={styles.list} key={index}>
                            <input type="input" id={"player"+index} placeholder="Name" />
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
