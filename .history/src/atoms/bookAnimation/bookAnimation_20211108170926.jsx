import React from 'react'
import bookLoading from '../../assets/book-paging.gif'
import * as styles from './bookAnimation.module.scss'

function BookAnimation(props) {
    return (
        <img 
            src={bookLoading} 
            width={props.width}
            height={props.height}
            alt="Reading..." 
            className={styles.gif}
        />
    )
}

export default BookAnimation
