import React from 'react'
import bookLoading from '../../assets/readingSbrikki.gif'
import * as styles from './bookAnimation.module.scss'

function BookAnimation() {
    return (
        <img 
            src={bookLoading}
            alt="Sbrikki's Books Reading..." 
            className={styles.gif}
            width={"100px"}
            height={"100px"} 
        />
    )
}

export default BookAnimation
