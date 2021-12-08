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
                        
                        
                            return(
                            <div className={styles.wrap}>
                                <p>Meeting {k*1 + 1}</p>
                                <div>
                                <div className={styles.graphs}>
                                    <p>{titles[k]}</p>
                                    <progress id={titles[k]} value={((elem[k]*1)/5)*1000} max="1000"> {((elem[k]*1)/5)*1000 + "%"} </progress>
                                </div>
                                </div>
                            </div>
                            )
                    }
                    return null
                })
            }
        </div>
    )
}

export default Qualities
