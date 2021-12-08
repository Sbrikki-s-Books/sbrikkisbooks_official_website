import React from 'react'
import MeetingQuality from '../../atoms/meetingQuality/meetingQuality'
import * as styles from './qualities.module.scss'

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
                                <MeetingQuality elem={elem} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Qualities
