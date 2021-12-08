import React from 'react'

function MeetingQuality({elem}) {
    return (
        <div>
            {
                                    elem.map((value, k) => {
                                        console.log(value[k])
                                        return (
                                            <div className={styles.graphs}>
                                                <p>{titles[k]}</p>
                                                <progress id={titles[k]} value={((value[k]*1)/5)*100} max="100"> {((value[k]*1)/5)*100 + "%"} </progress>
                                            </div>
                                        )
                                    })    
                                }
        </div>
    )
}

export default MeetingQuality
