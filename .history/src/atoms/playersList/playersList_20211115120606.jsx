import React, { useState, useEffect } from 'react'
import * as styles from './playersList.module.scss'

function PlayersList(props) {
    let i;

    let players = [];

    const [visible, setVisible] = useState(false)

    for(i=0; i<props.numPlayers; i++){
        players.push(i);
    }

    let myElement = document.getElementById('list');
    let bounding = myElement.getBoundingClientRect();

    useEffect( ()=>{
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [bounding.top, bounding.left, bounding.right, bounding.bottom]);

    return(
        <>
            {
                players.map((index) => {
                    return(
                        <div className={styles.list} id={"list"} key={index}>
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
