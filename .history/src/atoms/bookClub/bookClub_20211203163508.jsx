import React from 'react'
import * as styles from './bookClub.module.scss'

function BookClub() {
    return (
        <div className={styles.container} >
            <div className={styles.word}>Funny</div>
            <div className={styles.word}>Awsome</div>
            <div className={styles.word}>Stunning</div>
            <div className={styles.word}>Good</div>
        </div>
    )
}

export default BookClub
