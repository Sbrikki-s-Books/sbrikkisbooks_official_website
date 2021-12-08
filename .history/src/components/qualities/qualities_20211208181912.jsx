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
        <div className={styles.wrap}>
            {
                quality.map((elem, i) => {
                    console.log(elem)
                    return (
                        <>
                            <p>Meeting {i*1 + 1}</p>
                            <div>
                                {
                                    elem.map((title, k) => {
                                        return (
                                            <div className={styles.graphs}>
                                                <p>{titles[k]}</p>
                                            </div>
                                        )
                                    })    
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Qualities
