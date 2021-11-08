import React from 'react'
import bookLoading from '../../assets/book-paging.gif'
import * as styles from './bookAnimation.module.scss'

function BookAnimation() {
    return (
        <img 
            src={bookLoading}
            alt="Reading..." 
            className={styles.gif}
        />
    )
}

export default BookAnimation
