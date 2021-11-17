import React, { useState, useRef } from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
    const [points, setPoints] = useState(0);
    let array = [];
    const inputRefs = useRef([]);
    const checkRefs = useRef([]);

    for(i = 1; i <= props.rounds; i++){
        array.push(i);
        inputRefs.current.push("num" + props.name + i);

    }

    

    const addPoints = ({ref, refnum}) => {
        setPoints(points + refnum.value + 10);
        console.log(points)
       
    }

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
                                            ref={"num" + props.name + elem} 
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
                                            ref={"check" + props.name + elem} 
                                            onClick={addPoints("check"+props.name+elem, "num" + props.name + elem)} 
                                        />
                                    </div>
                                </td>
                            )
                        })
                    }
                    <div className={styles.field}>
                        <h5>Tot</h5>
                        <h4>{points}</h4>
                    </div>
                </tr>
            </tbody>
        </table>
    )
}

export default PlayerGame
