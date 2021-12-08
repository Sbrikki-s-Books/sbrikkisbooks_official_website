import React from 'react'

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
                    return (
                        <>
                            <p>Meeting {i*1 + 1}</p>
                            <div>
                                {
                                    elem.map((title, k) => {
                                        return (
                                            <div className={styles.graphs}>
                                                <p>{titles[i]}</p>
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
