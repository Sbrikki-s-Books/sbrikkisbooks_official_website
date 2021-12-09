import React from 'react'
import MeetingQuality from '../../atoms/meetingQuality/meetingQuality'
import * as styles from './qualities.module.scss'

const Qualities = ({quality}) => {
    return (
        <div>
            {
                quality.map((elem, i) => {
                    return (
                        <div className={styles.wrap} key={i} id={"meeting"+i*1+1}>
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
