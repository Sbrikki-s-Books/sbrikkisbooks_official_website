import React from 'react'
import * as styles from './qualities.module.scss'

const titles = [
    "Chill mood",
    "Alcohol Pfizer",
    "Reading",
    "Meeting organization",
    "Length of the meeting",
    "Meeting quality",
]

function Qualities({quality}) {
    return (
        <div>
            {
                quality.map((elem, i) => {
                    console.log(elem)
                    for(let k = 0; k < elem.length; k++){
                        console.log(elem[k])
                        
                            /*return(
                            <div className={styles.wrap}>
                                <p>Meeting {i*1 + 1}</p>
                                <div>
                                <div className={styles.graphs}>
                                    <p>{titles[i]}</p>
                                    <progress id={titles[i]} value={((elem[i]*1)/5)*100} max="100"> {((elem[i]*1)/5)*100 + "%"} </progress>
                                </div>
                                </div>
                            </div>
                            )*/
                    }
                })
            }
        </div>
    )
}

export default Qualities
