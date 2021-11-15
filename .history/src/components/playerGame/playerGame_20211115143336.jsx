import React from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
   // let points = 0;
    let array = [];


    for(i = 1; i < props.rounds; i++){
        array.push(i);
    }

    const addPoints = (id) => {
        //console.log(document.getElementById(id).checked)
    }



    return (
        <div className={styles.playerGame}>
            <h3>{props.name}</h3>

            {
                array.map((elem) => {
                    return(
                        <div>
                            <div className={styles.bet}>
                                <h4>Bet</h4>
                                <input
                                    type="number" 
                                    id={"num" + props.name + elem} 
                                    min="0" 
                                    max={elem} 
                                    step="1"
                                    placeholder="0"
                                />
                            </div>
                            <div className={styles.win}>
                                <h4>Win?</h4>
                                <input
                                    type="checkbox" 
                                    id={"check" + props.name + elem} 
                                    onChange={addPoints("check" + props.name + elem)} 
                                />
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default PlayerGame
