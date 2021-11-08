import React from 'react'
import * as styles from './hamburger.module.scss'
import hamburger from '../../assets/hamburger.png'

function Hamburger() {
    return (
        <img    
            src={hamburger}
            className={styles.hamburger}
        />
    )
}

export default Hamburger
