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
        <table className={styles.playerGame}>
            <tr>
                <td><h3 className={styles.name}>{props.name}</h3></td>
                {
                    array.map((elem) => {
                        return(
                            <td>
                                <th>Round {elem}</th>
                                <div className={styles.bet}>
                                    <h5>Bet</h5>
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
                                    <h5>Win?</h5>
                                    <input
                                        type="checkbox" 
                                        id={"check" + props.name + elem} 
                                        onChange={addPoints("check" + props.name + elem)} 
                                    />
                                </div>
                            </td>
                        )
                    })
                }
            </tr>
        </table>
    )
}

export default PlayerGame
