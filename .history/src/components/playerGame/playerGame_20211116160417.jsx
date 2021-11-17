import React, { useEffect } from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
    let points = 0;
    let array = [];


    for(i = 1; i <= props.rounds; i++){
        array.push(i);
    }

    const addPoints = (id) => {
        //console.log(document.getElementById(id).checked)
    }

    useEffect(() => {

    })



    return (
        <table className={styles.playerGame}>
            <tbody>
                <h3>{props.name}</h3>
                    <tr>
                    {
                        array.map((elem) => {
                            return(
                                <td>
                                    <td><h6>Round {elem}</h6></td>
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
                                    <div className={styles.field}>
                                        <h5>Tot</h5>
                                        <h4>{points}</h4>
                                    </div>
                                </td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default PlayerGame
