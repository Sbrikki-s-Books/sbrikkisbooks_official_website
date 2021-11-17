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
        checkRefs.current.push("check" + props.name + i);
    }

    const list = [...Array(8).keys()];
    const inputRef = list.map(x => useRef(null));
    const handler = idx => () => {
        const next = inputRef[idx + 1];
        if (next) {
            next.current.focus();
        }
    }

    {list.map(x => (
        <div>
        <input
            key={x}
            ref={inputRef[x]}
            onChange={handler(x)}
            type="number"
            className="otp_box"
        />
        </div>
    ))}

    

    const addPoints = (index) => {
        //setPoints(points + inputRefs[index].current.value + 10);
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
                                            ref={inputRefs[elem]} 
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
                                            ref={checkRefs[elem]} 
                                            onClick={addPoints(elem)} 
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
