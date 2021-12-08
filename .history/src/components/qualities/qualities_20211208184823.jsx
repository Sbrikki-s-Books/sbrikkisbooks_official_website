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
    console.log(quality)
    return (
        <div>
            {
                quality.map((elem, i) => {
                    console.log(elem)
                    return (
                        <div className={styles.wrap}>
                            <p>Meeting {i*1 + 1}</p>
                            <div>
                                {
                                    for(let i = 0; i < elem.length; i++){
                                        console.log(value[k])
                                            <div className={styles.graphs}>
                                                <p>{titles[k]}</p>
                                                <progress id={titles[k]} value={((value[k]*1)/5)*100} max="100"> {((value[k]*1)/5)*100 + "%"} </progress>
                                            </div>
                                        
                                    })    
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Qualities
