import React, { useState, useEffect } from 'react'
import bookLoading from '../../assets/book-paging.gif'
import * as styles from './bookAnimation.module.scss'

function BookAnimation() {

    
    return (
        
        <img 
            src={bookLoading}
            alt="Sbrikki's Books Reading..." 
            className={styles.gif}
        />
    )
}

export default BookAnimation