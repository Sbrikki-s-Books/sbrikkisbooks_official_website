import React from 'react'
import bookLoading from '../../assets/sbrikkisdrunk.svg'
import * as styles from './imageHome.module.scss'

function ImageHome() {
    return (
        <img 
            src={bookLoading}
            alt="Sbrikki's Books Drinking..." 
            className={styles.image}
            width={"100px"}
            height={"100px"} 
            title="Sbrikki's Books Drinking..."
        />
    )
}

export default ImageHome
