import React from 'react'
import MeetingQuality from '../../atoms/meetingQuality/meetingQuality'
import * as styles from './qualities.module.scss'

function Qualities({quality}) {
    return (
        <div>
            {
                quality.map((elem, i) => {
                    return (
                        <div className={styles.wrap} key={i}>
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
