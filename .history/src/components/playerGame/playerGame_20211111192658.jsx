import React, { useEffect } from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
    let points = 0;
    let array = [];


    for(i = 1; i < props.rounds; i++){
        array.push(i);
    }



    return (
        <div className={styles.playerGame}>
            <h3>{props.name}</h3>

            {
                array.map((elem) => {
                    return(
                        <>
                            <input type="number" id={"num" + props.name + elem} min="0" max={elem} />
                            <input type="checkbox" id={"check" + props.name + elem} />
                        </>
                    )
                })
            }


        </div>
    )
}

export default PlayerGame
