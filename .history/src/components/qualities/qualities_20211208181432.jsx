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
                            <p>Meeting {i++}</p>
                            {console.log(i)}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Qualities
