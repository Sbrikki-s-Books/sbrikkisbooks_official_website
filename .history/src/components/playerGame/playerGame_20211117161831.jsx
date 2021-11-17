import React, { useState } from 'react'
import * as styles from './playerGame.module.scss'

const PlayerGame = (props) => {

    let i;
    
    let array = [];

    const [points, setPoints] = useState(0);

    for(i = 1; i <= props.rounds; i++){
        array.push(i);
    }

    const addPoints = (checked, idNum) => {
        if(checked){
            setPoints(points + 10);
        }
        else{
            setPoints(points - 10);
        }
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
                                            onChange={(e) => addPoints(e.target.checked, "num" + props.name + elem)} 
                                        />
                                    </div>
                                </td>
                            )
                        })
                    }
                    <h4>Tot</h4>
                    <h4>{points}</h4>
                </tr>
            </tbody>
        </table>
    )
}

export default PlayerGame
